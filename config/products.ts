export type ExtensionStatus = "published" | "under-review" | "tbd";
export type AppStatus = "coming-soon" | "planned";

export interface Extension {
  id: string;
  name: string;
  description: string;
  status: ExtensionStatus;
  storeUrl: string;
  tags: string[];
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
    description:
      "Hover over a link to see a small preview card with the page title, description, image and estimated reading time, plus a plain-language check of the address.",
    status: "published",
    storeUrl:
      "https://chromewebstore.google.com/detail/cnbmicikknpgmncjedhpifdjommodghj",
    tags: ["Link previews", "Reading mode", "Address checks"],
  },
  {
    id: "all-in-one-pdf-image-tool",
    name: "All-in-One PDF & Image Toolkit",
    description:
      "Merge, split, compress and convert PDFs and images from your browser, without uploading your files to a server.",
    status: "published",
    storeUrl:
      "https://chromewebstore.google.com/detail/nbigenlhenhkoipfnnpdnpdfcfjgfoif",
    tags: ["Merge & split", "Compress", "Convert", "OCR"],
  },
  {
    id: "tabstash",
    name: "TabStash: Minimalist Tab Manager",
    description:
      "Stash your open tabs into named sessions with one click and restore them whenever you need them. Sessions stay in your browser's local storage.",
    status: "published",
    storeUrl:
      "https://chromewebstore.google.com/detail/ckcekpajmkahkhofeafhlehhppeaanki",
    tags: ["Stash sessions", "Search", "Export & import JSON"],
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
