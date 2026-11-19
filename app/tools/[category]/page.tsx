import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ToolCard from "@/components/tools/ToolCard";
import {
  categories,
  getCategory,
  getLiveTools,
  getLiveToolsByCategory,
} from "@/config/tools-registry";

// Only the 7 known categories exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

type PageProps = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const info = getCategory(category);
  if (!info) return {};

  const hasTools = getLiveToolsByCategory(info.slug).length > 0;

  return {
    title: `${info.name} Tools`,
    description: info.description,
    alternates: { canonical: `/tools/${info.slug}/` },
    // No empty pages for Google: stay out of the index until a tool is live.
    ...(hasTools ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const info = getCategory(category);
  if (!info) notFound();

  const tools = getLiveToolsByCategory(info.slug);
  const otherCategories = categories.filter(
    (item) =>
      item.slug !== info.slug &&
      getLiveTools().some((tool) => tool.category === item.slug),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600 dark:text-slate-400">
        <Link href="/tools/" className="underline">
          Tools
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{info.name}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight">{info.name} tools</h1>
      <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
        {info.description}
      </p>

      {tools.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              tool={{
                slug: tool.slug,
                category: tool.category,
                categoryName: info.name,
                name: tool.name,
                shortDescription: tool.shortDescription,
                icon: tool.icon,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
          <p className="text-lg font-medium">Tools for this category are coming soon.</p>
          <p className="mt-5">
            <Link href="/tools/" className="underline">
              See all tools
            </Link>
          </p>
        </div>
      )}

      {otherCategories.length > 0 && (
        <>
          <h2 className="mt-14 text-xl font-semibold">Other categories</h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {otherCategories.map((item) => (
              <li key={item.slug}>
                <Link href={`/tools/${item.slug}/`} className="underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
