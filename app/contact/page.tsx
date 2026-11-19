import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MaheeX to report a bug, suggest a tool or ask a question about our extensions and apps.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const email = siteConfig.contactEmail;
  const subject = encodeURIComponent("Message from maheex.tech");
  const mailto = `mailto:${email}?subject=${subject}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-slate-700 dark:text-slate-300">
        Bug report, tool idea, or a question about one of our extensions or apps?
        Send an email. This site has no contact form, so your message goes
        straight to our inbox through your own email app.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={mailto}
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Send an email
        </a>
        <span className="text-sm text-slate-600 dark:text-slate-400">
          or write to <span className="font-mono">{email}</span>
        </span>
      </div>

      <h2 className="mt-10 text-xl font-semibold">What to include in a bug report</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
        <li>The name of the tool, extension or app</li>
        <li>Your browser and operating system</li>
        <li>What you did, what you expected, and what happened instead</li>
        <li>A screenshot, if it helps</li>
      </ul>
    </div>
  );
}
