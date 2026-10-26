import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { routing, type AppLocale } from "@/i18n/routing";
import type { CmsProject, ProjectCategory, ProjectGalleryItem, ProjectLocaleContent, ProjectMetric } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");
const FIELDS = ["title", "summary", "role", "challenge", "solution", "results", "highlights"] as const;

function parseFields(block: string, file: string, locale: AppLocale): ProjectLocaleContent {
  const parts = block.split(/^## (title|summary|role|challenge|solution|results|highlights)\s*$/m);
  const values: Record<string, string> = {};

  for (let index = 1; index < parts.length; index += 2) {
    values[parts[index]] = (parts[index + 1] ?? "").trim();
  }

  for (const field of FIELDS) {
    if (!values[field]) {
      throw new Error(`${file} is missing ${locale} / ${field}`);
    }
  }

  return {
    title: values.title,
    summary: values.summary,
    role: values.role,
    challenge: values.challenge,
    solution: values.solution,
    results: values.results,
    highlights: values.highlights
      .split("\n")
      .map((line) => line.replace(/^- /, "").trim())
      .filter(Boolean),
  };
}

function parseLocaleSections(markdown: string, file: string): Record<AppLocale, ProjectLocaleContent> {
  const parts = markdown.split(/^# locale:(en|pt|es|ja|zh)\s*$/m);
  const content = {} as Record<AppLocale, ProjectLocaleContent>;

  for (let index = 1; index < parts.length; index += 2) {
    const locale = parts[index] as AppLocale;
    content[locale] = parseFields(parts[index + 1] ?? "", file, locale);
  }

  for (const locale of routing.locales) {
    if (!content[locale]) {
      throw new Error(`${file} is missing locale ${locale}`);
    }
  }

  return content;
}

function parseProjectMarkdown(raw: string, file: string): CmsProject {
  const parsed = matter(raw);
  const data = parsed.data as Partial<CmsProject>;
  if (!data.slug || !data.cover || !Array.isArray(data.tech)) {
    throw new Error(`${file} is missing slug, cover, or tech in the front matter`);
  }

  return {
    id: data.id || data.slug,
    slug: data.slug,
    featured: Boolean(data.featured),
    order: Number(data.order ?? 0),
    categories: (data.categories ?? []) as ProjectCategory[],
    cover: data.cover,
    tech: data.tech,
    metrics: (data.metrics ?? []) as ProjectMetric[],
    gallery: (data.gallery ?? []) as ProjectGalleryItem[],
    content: parseLocaleSections(parsed.content, file),
  };
}

async function readAllProjects(): Promise<CmsProject[]> {
  const files = (await fs.readdir(CONTENT_DIR)).filter((file) => file.endsWith(".md"));
  const projects = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
      return parseProjectMarkdown(raw, file);
    }),
  );

  return projects.sort((a, b) => a.order - b.order);
}

export async function getProjects(): Promise<CmsProject[]> {
  return readAllProjects();
}

export async function getProjectBySlug(slug: string): Promise<CmsProject | null> {
  const projects = await readAllProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await readAllProjects();
  return projects.map((project) => project.slug);
}
