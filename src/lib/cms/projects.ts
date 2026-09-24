import { promises as fs } from "fs";
import path from "path";
import {
  fetchProjectBySlugFromSupabase,
  fetchProjectsFromSupabase,
} from "./supabase-client";
import type { CmsProject } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

async function readAllProjectsFromJson(): Promise<CmsProject[]> {
  const files = await fs.readdir(CONTENT_DIR);
  const jsonFiles = files.filter((file) => file.endsWith(".json"));

  const projects = await Promise.all(
    jsonFiles.map(async (file) => {
      const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
      return JSON.parse(raw) as CmsProject;
    }),
  );

  return projects.sort((a, b) => a.order - b.order);
}

async function readAllProjects(): Promise<CmsProject[]> {
  const [fromSupabase, fromJson] = await Promise.all([
    fetchProjectsFromSupabase(),
    readAllProjectsFromJson(),
  ]);
  if (!fromSupabase?.length) return fromJson;

  const seen = new Set(fromSupabase.map((project) => project.slug));
  return [...fromSupabase, ...fromJson.filter((project) => !seen.has(project.slug))].sort(
    (a, b) => a.order - b.order,
  );
}

export async function getProjects(): Promise<CmsProject[]> {
  return readAllProjects();
}

export async function getProjectBySlug(
  slug: string,
): Promise<CmsProject | null> {
  const fromSupabase = await fetchProjectBySlugFromSupabase(slug);
  if (fromSupabase) return fromSupabase;

  const projects = await readAllProjectsFromJson();
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await readAllProjects();
  return projects.map((project) => project.slug);
}
