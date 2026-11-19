import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools",
  description: "Free browser-based tools from MaheeX are coming soon.",
  alternates: { canonical: "/tools/" },
  robots: { index: false, follow: true },
};

export default function ToolsPlaceholderPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold tracking-tight">Tools</h1>
      <p className="mt-4 text-slate-700 dark:text-slate-300">
        Our free browser-based tools are coming soon.
      </p>
      <p className="mt-6">
        <Link href="/" className="underline">
          Back to the homepage
        </Link>
      </p>
    </div>
  );
}
