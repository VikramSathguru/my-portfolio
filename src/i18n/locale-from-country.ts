import { routing, type AppLocale } from "./routing";

const countryLocales: Record<string, AppLocale> = {
  AO: "pt",
  AR: "es",
  BO: "es",
  BR: "pt",
  CL: "es",
  CN: "zh",
  CO: "es",
  CR: "es",
  CU: "es",
  CV: "pt",
  DO: "es",
  EC: "es",
  ES: "es",
  GQ: "es",
  GT: "es",
  GW: "pt",
  HK: "zh",
  HN: "es",
  JP: "ja",
  MO: "zh",
  MZ: "pt",
  MX: "es",
  NI: "es",
  PA: "es",
  PE: "es",
  PR: "es",
  PT: "pt",
  PY: "es",
  SG: "zh",
  ST: "pt",
  SV: "es",
  TL: "pt",
  TW: "zh",
  UY: "es",
  VE: "es",
};

export function getLocaleFromCountry(countryCode: string | null): AppLocale {
  const country = countryCode?.trim().toUpperCase();
  if (!country || !Object.hasOwn(countryLocales, country)) {
    return routing.defaultLocale;
  }

  return countryLocales[country];
}
