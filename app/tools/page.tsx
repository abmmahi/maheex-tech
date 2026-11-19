import type { Metadata } from "next";
import Link from "next/link";
import { categories, getLiveTools } from "@/config/tools-registry";
import ToolDirectory, { type DirectoryTool } from "@/components/tools/ToolDirectory";

const liveTools = getLiveTools();

export const metadata: Metadata = {
  title: "Free Online Tools",
  description:
    "Browse free online tools from MaheeX: image and PDF tools, text tools, developer tools, calculators and more.",
  alternates: { canonical: "/tools/" },
  // No empty pages for Google: stay out of the index until a tool is live.
  ...(liveTools.length === 0 ? { robots: { index: false, follow: true } } : {}),
};

function categoryName(slug: string): string {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}

export default function ToolsPage() {
  const directoryTools: DirectoryTool[] = liveTools.map((tool) => ({
    slug: tool.slug,
    category: tool.category,
    categoryName: categoryName(tool.category),
    name: tool.name,
    shortDescription: tool.shortDescription,
    icon: tool.icon,
    keywords: tool.keywords,
  }));

  const activeCategories = categories.filter((category) =>
    liveTools.some((tool) => tool.category === category.slug),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Free online tools</h1>
      <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
        Free tools that work in your browser, each on its own page. New tools are
        added in batches.
      </p>

      {liveTools.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
          <p className="text-lg font-medium">Our first tools are coming soon.</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Check back shortly, or see our Chrome extensions on the homepage.
          </p>
          <p className="mt-5">
            <Link href="/" className="underline">
              Back to the homepage
            </Link>
          </p>
        </div>
      ) : (
        <div className="mt-8">
          <ToolDirectory
            tools={directoryTools}
            categories={activeCategories.map(({ slug, name }) => ({ slug, name }))}
          />

          <h2 className="mt-14 text-xl font-semibold">Browse by category</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {activeCategories.map((category) => (
              <li key={category.slug}>
                <Link href={`/tools/${category.slug}/`} className="underline">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
