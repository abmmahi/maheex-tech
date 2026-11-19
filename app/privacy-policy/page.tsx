import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MaheeX handles data, cookies, analytics, advertising and affiliate links on maheex.tech.",
  alternates: { canonical: "/privacy-policy/" },
};

const LAST_UPDATED = "November 20, 2026";

const h2 = "mt-10 text-xl font-semibold";
const p = "mt-3 text-slate-700 dark:text-slate-300";
const ul = "mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Last updated: {LAST_UPDATED}
      </p>

      <p className={p}>
        This policy explains what happens to information when you visit{" "}
        {siteConfig.url.replace("https://", "")} (the website of {siteConfig.name}).
        We try to keep it short and honest. If something here is unclear, write to{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
          {siteConfig.contactEmail}
        </a>
        .
      </p>

      <h2 className={h2}>1. Text and files you use in our tools</h2>
      <p className={p}>
        The tools on this website are built to run in your browser. We do not run
        a server or database that receives the text, images or files you enter into
        them, and we do not ask you to create an account. Each tool page describes
        what that specific tool does. Please do not enter highly sensitive
        information into any online tool unless you are comfortable with it.
      </p>

      <h2 className={h2}>2. Information collected automatically</h2>
      <p className={p}>
        Like any website, the service that hosts this site (a third-party hosting
        and content delivery provider) may record technical information when your
        browser requests a page, such as your IP address, browser type, the page
        requested and the time. This is normal server logging. We do not use it to
        identify individual visitors.
      </p>

      <h2 className={h2}>3. Cookies and local storage</h2>
      <p className={p}>
        We store one small preference in your browser&apos;s local storage: your
        choice of light or dark theme. It stays on your device and is not sent to
        us. You can remove it at any time by clearing your site data in your
        browser settings.
      </p>
      <p className={p}>
        Third-party services described below, such as advertising, may set their
        own cookies once they are active on this site.
      </p>

      <h2 className={h2}>4. Analytics</h2>
      <p className={p}>
        We use Google Search Console. It shows us information that Google collects
        about how this site appears in Google Search (for example which searches
        led to our pages). It does not require tracking code on our pages.
      </p>
      <p className={p}>
        We may add a privacy-focused visitor analytics service later. If we do, we
        will update this page and say which service it is before it starts.
      </p>

      <h2 className={h2}>5. Advertising</h2>
      <p className={p}>
        This website is funded in part by advertising. At the time of writing, no
        ads are shown. When we start showing ads, we plan to use Google AdSense, and
        this section describes how that works.
      </p>
      <ul className={ul}>
        <li>
          Third-party vendors, including Google, use cookies to serve ads based on
          your previous visits to this and other websites.
        </li>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to
          serve ads to you based on your visit to this site and other sites on the
          internet.
        </li>
        <li>
          You can opt out of personalized advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            className="underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Ads Settings
          </a>
          .
        </li>
        <li>
          For visitors in the European Economic Area and the United Kingdom, we
          will show a consent choice before personalized ads are used.
        </li>
      </ul>

      <h2 className={h2}>6. Affiliate links</h2>
      <p className={p}>
        Some pages may contain affiliate links. If you buy something through such a
        link, we may earn a commission at no extra cost to you. We mark affiliate
        links as such.
      </p>

      <h2 className={h2}>7. Links to other websites</h2>
      <p className={p}>
        This site links to other websites, for example the Chrome Web Store pages of
        our extensions. Those sites have their own privacy practices, and we are not
        responsible for them. Our browser extensions and apps are separate products
        and may have their own privacy policies on their store listings.
      </p>

      <h2 className={h2}>8. Children</h2>
      <p className={p}>
        This website is not directed at children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2 className={h2}>9. Your choices</h2>
      <ul className={ul}>
        <li>Clear or block cookies and site data in your browser settings.</li>
        <li>Opt out of personalized ads using the link in section 5.</li>
        <li>
          Contact us if you have a question or want to ask about data related to you.
        </li>
      </ul>

      <h2 className={h2}>10. Changes to this policy</h2>
      <p className={p}>
        We will update this page when our practices change, for example when ads or
        a new analytics service go live, and change the date at the top.
      </p>

      <h2 className={h2}>11. Contact</h2>
      <p className={p}>
        Questions about this policy:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
          {siteConfig.contactEmail}
        </a>
        . See also our{" "}
        <Link href="/terms" className="underline">
          Terms
        </Link>
        .
      </p>
    </div>
  );
}
