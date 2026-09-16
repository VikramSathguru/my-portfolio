import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin · Vikram Portfolio",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--surface)] font-sans text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
