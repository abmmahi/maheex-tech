export type ExtensionStatus = "published" | "under-review" | "tbd";
export type AppStatus = "coming-soon" | "planned";

export interface Extension {
  id: string;
  name: string;
  description: string;
  status: ExtensionStatus;
  storeUrl: string;
}

export interface AppProduct {
  id: string;
  name: string;
  description: string;
  status: AppStatus;
  plannedUrl: string;
}

export const extensions: Extension[] = [
  {
    id: "hoverray",
    name: "HoverRay by MaheeX: Instant Link Preview & Reader",
    // TODO: write a one-line description
    description: "TODO: one-line description",
    // TODO: set to "published" or "under-review"
    status: "tbd",
    storeUrl:
      "https://chromewebstore.google.com/detail/cnbmicikknpgmncjedhpifdjommodghj",
  },
  {
    id: "all-in-one-pdf-image-tool",
    name: "All-in-One PDF & Image Tool",
    // TODO: write a one-line description
    description: "TODO: one-line description",
    // TODO: set to "published" or "under-review"
    status: "tbd",
    storeUrl:
      "https://chromewebstore.google.com/detail/nbigenlhenhkoipfnnpdnpdfcfjgfoif",
  },
  {
    id: "tabstash",
    name: "TabStash: Minimalist Tab Manager",
    // TODO: write a one-line description
    description: "TODO: one-line description",
    // TODO: set to "published" or "under-review"
    status: "tbd",
    storeUrl:
      "https://chromewebstore.google.com/detail/ckcekpajmkahkhofeafhlehhppeaanki",
  },
];

export const apps: AppProduct[] = [
  {
    id: "bloom",
    name: "Bloom",
    description: "Period tracker app.",
    status: "planned",
    plannedUrl: "https://bloom.maheex.tech",
  },
  {
    id: "chithibox",
    name: "ChithiBox",
    description: "Anonymous chithi (letters) app.",
    status: "coming-soon",
    plannedUrl: "https://chithibox.maheex.tech",
  },
  {
    id: "synclife",
    name: "SyncLife",
    description: "Health and habit tracker app.",
    status: "planned",
    plannedUrl: "https://synclife.maheex.tech",
  },
];
