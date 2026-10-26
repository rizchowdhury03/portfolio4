/**
 * The yellow "Setup checklist" box.
 * Only shown while you run the site on your own computer (npm run dev).
 * It is never included in the published website.
 */
import { getSetupChecklist } from "@/lib/content";

export function SetupChecklist() {
  if (process.env.NODE_ENV !== "development") return null;
  const items = getSetupChecklist();
  if (items.length === 0) return null;
  return (
    <aside className="border-b border-amber-300 bg-amber-50 text-amber-950">
      <details className="mx-auto max-w-6xl px-5 py-3 text-sm sm:px-8">
        <summary className="cursor-pointer font-medium">
          Setup checklist: {items.length} thing{items.length === 1 ? "" : "s"} to add (only visible on your computer)
        </summary>
        <ul className="mt-3 list-disc space-y-1 pb-2 pl-5">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>
    </aside>
  );
}
