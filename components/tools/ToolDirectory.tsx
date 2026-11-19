"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import ToolCard, { type ToolCardData } from "./ToolCard";

export interface DirectoryTool extends ToolCardData {
  keywords: string[];
}

interface ToolDirectoryProps {
  tools: DirectoryTool[];
  categories: { slug: string; name: string }[];
}

// Tags are shown only when at least one live tool matches them.
const candidateTags = ["pdf", "image", "json", "qr", "password", "calculator", "bangla", "text"];

const chipBase =
  "rounded-full border px-3 py-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:focus-visible:outline-slate-100";
const chipOff =
  "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800";
const chipOn =
  "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900";

export default function ToolDirectory({ tools, categories }: ToolDirectoryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const fuse = useMemo(
    () =>
      new Fuse(tools, {
        keys: [
          { name: "name", weight: 3 },
          { name: "keywords", weight: 2 },
          { name: "shortDescription", weight: 1 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [tools],
  );

  const popularTags = useMemo(
    () => candidateTags.filter((tag) => fuse.search(tag).length > 0),
    [fuse],
  );

  const results = useMemo(() => {
    const q = query.trim();
    const base = q ? fuse.search(q).map((result) => result.item) : tools;
    return category === "all" ? base : base.filter((tool) => tool.category === category);
  }, [query, category, fuse, tools]);

  const hasFilters = query.trim() !== "" || category !== "all";

  function clearFilters() {
    setQuery("");
    setCategory("all");
  }

  return (
    <div>
      <div className="relative">
        <label htmlFor="tool-search" className="sr-only">
          Search tools
        </label>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          id="tool-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tools, for example pdf or json"
          className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          type="button"
          aria-pressed={category === "all"}
          onClick={() => setCategory("all")}
          className={cn(chipBase, category === "all" ? chipOn : chipOff)}
        >
          All
        </button>
        {categories.map((item) => (
          <button
            key={item.slug}
            type="button"
            aria-pressed={category === item.slug}
            onClick={() => setCategory(item.slug)}
            className={cn(chipBase, category === item.slug ? chipOn : chipOff)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {popularTags.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-slate-500 dark:text-slate-400">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={query.trim().toLowerCase() === tag}
              onClick={() => setQuery(query.trim().toLowerCase() === tag ? "" : tag)}
              className={cn(
                chipBase,
                query.trim().toLowerCase() === tag ? chipOn : chipOff,
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <p className="mt-6 text-sm text-slate-600 dark:text-slate-400" aria-live="polite">
        {results.length} {results.length === 1 ? "tool" : "tools"}
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
          <p className="font-medium">No tools match your search.</p>
          {hasFilters && (
            <button type="button" onClick={clearFilters} className="mt-3 text-sm underline">
              Clear search and filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
