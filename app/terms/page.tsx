import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using maheex.tech, including our free online tools, links and advertising.",
  alternates: { canonical: "/terms/" },
};

const LAST_UPDATED = "November 20, 2026";

const h2 = "mt-10 text-xl font-semibold";
const p = "mt-3 text-slate-700 dark:text-slate-300";
const ul = "mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Last updated: {LAST_UPDATED}
      </p>

      <p className={p}>
        By using this website, you agree to these terms. If you do not agree,
        please do not use the site.
      </p>

      <h2 className={h2}>1. What this website offers</h2>
      <p className={p}>
        {siteConfig.name} provides information about our Chrome extensions and apps,
        and a collection of free online tools. We may change, add or remove tools
        and content at any time.
      </p>

      <h2 className={h2}>2. Tools are provided as they are</h2>
      <p className={p}>
        We work to make the tools useful and correct, but we cannot promise that
        they are free of errors or that results are right for your situation. This
        matters most for calculators and converters. Check important results
        yourself before relying on them, especially for money, health, legal or
        academic decisions. The tools and content on this site are not
        professional advice.
      </p>

      <h2 className={h2}>3. Your content</h2>
      <p className={p}>
        The text and files you use in the tools belong to you, and you are
        responsible for having the right to use them. Please do not use the site to
        process material that is illegal or that you have no right to handle.
      </p>

      <h2 className={h2}>4. Acceptable use</h2>
      <ul className={ul}>
        <li>Do not try to break, overload or disrupt the website.</li>
        <li>Do not use automated tools to copy large parts of the site.</li>
        <li>Do not use the site to break the law or to harm other people.</li>
      </ul>

      <h2 className={h2}>5. Ownership</h2>
      <p className={p}>
        The website design, code, text and branding are owned by {siteConfig.name}{" "}
        unless stated otherwise. You may link to our pages. Please do not copy our
        articles or republish them as your own.
      </p>

      <h2 className={h2}>6. Advertising and affiliate links</h2>
      <p className={p}>
        This site may show advertisements and may contain affiliate links, as
        explained in the{" "}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        . We are not responsible for the content of advertisers or of websites we
        link to.
      </p>

      <h2 className={h2}>7. Extensions and apps</h2>
      <p className={p}>
        Our browser extensions and apps are distributed through their own store
        listings, which may carry additional terms and privacy information. Those
        take priority for the product they describe.
      </p>

      <h2 className={h2}>8. Limit of liability</h2>
      <p className={p}>
        To the extent allowed by law, {siteConfig.name} is not liable for any loss
        or damage that results from using, or being unable to use, this website or
        its tools.
      </p>

      <h2 className={h2}>9. Changes to these terms</h2>
      <p className={p}>
        We may update these terms from time to time. The date at the top shows the
        latest version. Continuing to use the site after a change means you accept
        the new terms.
      </p>

      <h2 className={h2}>10. Contact</h2>
      <p className={p}>
        Questions about these terms:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </div>
  );
}
