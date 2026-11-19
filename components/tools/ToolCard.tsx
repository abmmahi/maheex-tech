import Link from "next/link";
import Badge from "@/components/ui/Badge";
import ToolIcon from "./ToolIcon";

export interface ToolCardData {
  slug: string;
  category: string;
  categoryName: string;
  name: string;
  shortDescription: string;
  icon: string;
}

export default function ToolCard({ tool }: { tool: ToolCardData }) {
  return (
    <Link
      href={`/tools/${tool.category}/${tool.slug}/`}
      className="flex flex-col rounded-xl border border-slate-200 p-5 transition-colors hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <ToolIcon name={tool.icon} className="h-5 w-5" />
        </span>
        <h2 className="font-semibold leading-snug">{tool.name}</h2>
      </div>
      <p className="mt-3 flex-1 text-sm text-slate-700 dark:text-slate-300">
        {tool.shortDescription}
      </p>
      <div className="mt-4">
        <Badge>{tool.categoryName}</Badge>
      </div>
    </Link>
  );
}
