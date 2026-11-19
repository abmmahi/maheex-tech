import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{siteConfig.name}</h1>
        <p className="mt-2 text-lg">{siteConfig.tagline}</p>
        <p className="mt-4 text-sm opacity-70">Coming soon</p>
      </div>
    </main>
  );
}
