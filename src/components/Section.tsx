/**
 * Shared layout for each numbered section (About, Experience, Projects ...).
 */
import { Reveal } from "./Reveal";

export function Section({
  id,
  number,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
            <span className="text-accent">{number}</span>
            <span className="mx-2" aria-hidden="true">/</span>
            {label}
          </p>
          <h2
            id={headingId}
            className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-normal tracking-tight text-balance md:text-5xl"
          >
            {title}
          </h2>
        </Reveal>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
