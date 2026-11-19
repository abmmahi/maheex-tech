export const siteConfig = {
  name: "MaheeX",
  url: "https://maheex.tech",
  tagline: "Browser extensions, apps and free online tools",
  description:
    "MaheeX is a small brand building Chrome extensions, apps and free browser-based tools.",
  // TODO: put your real contact email here
  contactEmail: "TODO-your-email@example.com",
  locale: "en",
} as const;

export type SiteConfig = typeof siteConfig;
