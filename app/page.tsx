import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  apps,
  extensions,
  type AppStatus,
  type ExtensionStatus,
} from "@/config/products";
import Badge, { type BadgeTone } from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/Button";

const pageTitle = `${siteConfig.name}: Browser extensions, apps and free online tools`;
const pageDescription =
  "MaheeX builds Chrome extensions, apps and free browser-based tools. See our published extensions, the apps on the way, and our tools.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
  },
};

const extensionStatus: Record<ExtensionStatus, { label: string; tone: BadgeTone }> = {
  published: { label: "Published", tone: "green" },
  "under-review": { label: "Under review", tone: "amber" },
  tbd: { label: "Status to be announced", tone: "slate" },
};

const appStatus: Record<AppStatus, { label: string; tone: BadgeTone }> = {
  "coming-soon": { label: "Coming soon", tone: "blue" },
  planned: { label: "Planned", tone: "slate" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.contactEmail,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {siteConfig.name}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Browser extensions, apps and free online tools
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            {siteConfig.name} builds small, focused software: Chrome extensions you
            can install today, apps that are on the way, and a growing collection
            of free browser-based tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/tools">
              See our tools
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#extensions" variant="secondary">
              Our extensions
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Chrome extensions */}
      <section id="extensions" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-14">
        <h2 className="text-2xl font-bold tracking-tight">Chrome extensions</h2>
        <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">
          Install from the Chrome Web Store.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {extensions.map((ext) => {
            const status = extensionStatus[ext.status];
            return (
              <article
                key={ext.id}
                className="flex flex-col rounded-xl border border-slate-200 p-5 dark:border-slate-800"
              >
                <h3 className="text-lg font-semibold leading-snug">{ext.name}</h3>
                <div className="mt-2">
                  <Badge tone={status.tone}>{status.label}</Badge>
                </div>
                <p className="mt-3 flex-1 text-sm text-slate-700 dark:text-slate-300">
                  {ext.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Highlights">
                  {ext.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <ButtonLink href={ext.storeUrl} external variant="secondary">
                    View on Chrome Web Store
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Apps */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Apps</h2>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">
            These apps are not released yet. Each one will get its own address.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {apps.map((app) => {
              const status = appStatus[app.status];
              return (
                <article
                  key={app.id}
                  className="flex flex-col rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{app.name}</h3>
                    <Badge tone={status.tone}>{status.label}</Badge>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-slate-700 dark:text-slate-300">
                    {app.description}
                  </p>
                  <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    Planned address:{" "}
                    <code className="font-mono">
                      {app.plannedUrl.replace("https://", "")}
                    </code>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Free online tools</h2>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">
            A collection of free tools that work in your browser, each on its own
            page. New tools are added in batches.
          </p>
          <div className="mt-6">
            <ButtonLink href="/tools">
              See our tools
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
