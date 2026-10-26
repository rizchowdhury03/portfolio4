/**
 * Footer: name, field, year and contact icons. Content from portfolio.ts.
 */
import { headings, profile } from "@/data/portfolio";
import { getContactLinks } from "@/lib/content";
import { ContactIcon } from "./icons";

export function Footer() {
  const links = getContactLinks();
  // The year is filled in each time the site is built (every deploy).
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 border-t border-paper/15 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-paper">{profile.name}</p>
          <p className="mt-1">
            {headings.footerLine} · © {year}
          </p>
        </div>
        {links.length > 0 && (
          <ul className="flex gap-1" aria-label="Contact links">
            {links.map((link) => (
              <li key={link.kind}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  {...(link.kind !== "email" && { target: "_blank", rel: "noopener noreferrer" })}
                  className="grid size-10 place-items-center rounded-full transition-colors hover:bg-paper/10 hover:text-paper focus-visible:outline-paper"
                >
                  <ContactIcon kind={link.kind} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        )}
        </div>
      </div>
    </footer>
  );
}
