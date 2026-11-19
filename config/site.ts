export const siteConfig = {
  name: "MaheeX",
  url: "https://maheex.tech",
  tagline: "Browser extensions, apps and free online tools",
  description:
    "MaheeX is a small brand building Chrome extensions, apps and free browser-based tools.",
  contactEmail: "hello@maheex.tech",
  locale: "en",
} as const;

export type SiteConfig = typeof siteConfig;
