// Placeholder for ads. It reserves a fixed height so the page does not jump
// when a real ad loads later (Phase 16 replaces the placeholder with real ads).
//
// While ADS_ENABLED is false, visitors see nothing on the live site.
// In local development (npm run dev) you see a dashed box so you can check the layout.
const ADS_ENABLED = false;

interface AdSlotProps {
  height?: number;
  label?: string;
  className?: string;
}

export default function AdSlot({
  height = 250,
  label = "Ad slot",
  className = "",
}: AdSlotProps) {
  const isDev = process.env.NODE_ENV === "development";
  if (!ADS_ENABLED && !isDev) return null;

  return (
    <div
      className={`flex w-full items-center justify-center rounded-md border border-dashed border-slate-300 text-xs text-slate-400 dark:border-slate-700 dark:text-slate-500 ${className}`}
      style={{ minHeight: height }}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
