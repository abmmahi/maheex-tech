import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About MaheeX: Chrome extensions, apps and free browser-based tools, and how this website is funded.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">About {siteConfig.name}</h1>
      <p className="mt-4 text-slate-700 dark:text-slate-300">
        {siteConfig.name} is a small brand that builds Chrome extensions, mobile
        apps and free online tools. This website is the home for all of it.
      </p>
      {/* TODO: add a short paragraph about who makes MaheeX and why */}

      <h2 className="mt-10 text-xl font-semibold">What you will find here</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
        <li>
          <Link href="/" className="underline">
            The homepage
          </Link>{" "}
          lists our Chrome extensions and the apps that are on the way.
        </li>
        <li>
          <Link href="/tools" className="underline">
            The tools section
          </Link>{" "}
          is a growing collection of free browser-based tools. New tools are added
          in batches, and each one has its own page.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">How your data is handled</h2>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        We build the tools to work inside your browser, without a server of our
        own. Each tool page explains what happens to the text or files you use
        with it. The{" "}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>{" "}
        covers cookies, analytics and advertising.
      </p>

      <h2 className="mt-10 text-xl font-semibold">How this website is funded</h2>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        Running a domain and a website costs money. To cover it, {siteConfig.name}{" "}
        may show advertising (for example Google AdSense), use affiliate links,
        and accept donations. Ads are kept separate from tool content, and
        affiliate links are marked as such.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Get in touch</h2>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        Found a bug or have an idea for a tool? Please use the{" "}
        <Link href="/contact" className="underline">
          contact page
        </Link>
        .
      </p>
    </div>
  );
}
