/**
 * The frame around every page: fonts, page title, description and
 * link-preview (Open Graph) information. Text comes from portfolio.ts.
 */
import type { Metadata, Viewport } from "next";

// Fonts are bundled with the site (no Google account or network needed).
import "@fontsource-variable/newsreader/index.css";
import "@fontsource-variable/newsreader/wght-italic.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

import { profile } from "@/data/portfolio";

const title = `${profile.name} · ${profile.positioning.join(" × ")}`;
const description = `${profile.role} at ${profile.university}. ${profile.intro}`;

// Works out the site address for link previews: your siteUrl first,
// then the address Vercel provides automatically, then a local fallback.
function getSiteUrl() {
  if (profile.siteUrl) return profile.siteUrl;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#f5f3ee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Marks that JavaScript is running, so reveal animations can start hidden. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
