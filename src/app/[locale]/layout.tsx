import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MotionRoot } from "@/components/motion";
import { ChatWidget } from "@/components/chat-widget";
import { PortfolioIndexProvider } from "@/components/portfolio-index";
import { catalogFor } from "@/lib/portfolio-context";
import { routing, type AppLocale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const siteUrl = siteConfig.getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
      apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale,
      url: `/${locale}`,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/vikram-banner.png",
          width: 1469,
          height: 1071,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/vikram-banner.png"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((code) => [code, `/${code}`]),
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const tChat = await getTranslations({ locale, namespace: "Chat" });
  const docs = await catalogFor(locale as AppLocale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <PortfolioIndexProvider docs={docs}>
            <ThemeProvider>
              <MotionRoot>
                {children}
                <ChatWidget
                  labels={{
                    label: tChat("label"),
                    title: tChat("title"),
                    close: tChat("close"),
                    placeholder: tChat("placeholder"),
                    send: tChat("send"),
                    intro: tChat("intro"),
                  }}
                />
              </MotionRoot>
            </ThemeProvider>
          </PortfolioIndexProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
