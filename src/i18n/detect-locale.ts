import { NextRequest } from "next/server";
import { getLocaleFromCountry } from "./locale-from-country";
import { routing, LOCALE_COOKIE, type AppLocale } from "./routing";

const localeSet = new Set<string>(routing.locales);

export function isAppLocale(value: string | undefined): value is AppLocale {
  return Boolean(value && localeSet.has(value));
}

export function readSavedLocale(request: NextRequest): AppLocale | null {
  const value = request.cookies.get(LOCALE_COOKIE)?.value;
  return isAppLocale(value) ? value : null;
}

export function hasLocalePrefix(pathname: string): boolean {
  return routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

/** Country from the host's IP header, then a country lookup of the public IP. */
export async function localeFromVisitorIp(request: NextRequest): Promise<AppLocale> {
  const fromHeader = usableCountry(
    request.headers.get("x-vercel-ip-country") ??
      request.headers.get("cf-ipcountry") ??
      request.headers.get("x-nf-country") ??
      request.headers.get("x-country-code"),
  );
  if (fromHeader) return getLocaleFromCountry(fromHeader);

  const ip = publicIp(request);
  if (!ip) return routing.defaultLocale;
  return getLocaleFromCountry(await lookupCountry(ip));
}

function usableCountry(value: string | null): string | null {
  const code = value?.trim().toUpperCase();
  if (!code || !/^[A-Z]{2}$/.test(code) || code === "XX" || code === "T1") return null;
  return code;
}

function publicIp(request: NextRequest): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  const candidate = (forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip"))?.trim();
  if (!candidate || !isPublicIp(candidate)) return null;
  return candidate;
}

function isPublicIp(ip: string): boolean {
  if (
    ip === "::1" ||
    ip.startsWith("127.") ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("169.254.")
  ) {
    return false;
  }
  const v4 = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (v4) {
    const parts = v4.slice(1).map(Number);
    if (parts.some((part) => part > 255)) return false;
    if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return false;
    return true;
  }
  const lower = ip.toLowerCase();
  return /^[0-9a-f:]+$/i.test(ip) && !lower.startsWith("fe80") && !lower.startsWith("fc") && !lower.startsWith("fd");
}

async function lookupCountry(ip: string): Promise<string | null> {
  try {
    const response = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}?fields=success,country_code`, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(1200),
    });
    if (!response.ok) return null;
    const data = (await response.json()) as { success?: boolean; country_code?: string };
    if (data.success === false) return null;
    return usableCountry(data.country_code ?? null);
  } catch {
    return null;
  }
}
