/**
 * The first screen: name, role, positioning line, intro and main buttons.
 * All text comes from src/data/portfolio.ts → profile.
 */
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { getContactLinks, hasPhoto, hasResume } from "@/lib/content";
import { ContactIcon } from "./icons";

export function Hero({ initials }: { initials: string }) {
  const links = getContactLinks();
  const showPhoto = hasPhoto();
  const showResume = hasResume();

  return (
    <section id="top" aria-label="Introduction" className="ledger relative">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pt-14 pb-20 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:pt-24 md:pb-28">
        <div className="max-w-2xl">
          <p className="hero-in font-mono text-xs tracking-[0.14em] text-muted uppercase">
            {profile.university} <span aria-hidden="true">·</span> {profile.location}
          </p>

          <h1 className="hero-in mt-6 font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-normal tracking-[-0.02em] [animation-delay:60ms]">
            {profile.name}
          </h1>

          <p className="hero-in mt-5 text-lg text-ink-soft [animation-delay:120ms]">{profile.role}</p>

          <p
            className="hero-in mt-10 font-display text-2xl italic md:text-3xl [animation-delay:180ms]"
            aria-label={profile.positioning.join(", ")}
          >
            {profile.positioning.map((word, i) => (
              <span key={word}>
                {i > 0 && (
                  <span aria-hidden="true" className="mx-3 font-sans text-xl not-italic text-accent md:text-2xl">
                    ×
                  </span>
                )}
                {word}
              </span>
            ))}
          </p>

          <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg [animation-delay:240ms]">
            {profile.intro}
          </p>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-3 [animation-delay:300ms]">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              View my work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            {showResume && (
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                <Download className="size-4" aria-hidden="true" />
                Download CV
              </a>
            )}
            {links.length > 0 && (
              <ul className="flex items-center gap-1 sm:ml-3" aria-label="Contact links">
                {links.map((link) => (
                  <li key={link.kind}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      title={link.label}
                      {...(link.kind !== "email" && { target: "_blank", rel: "noopener noreferrer" })}
                      className="grid size-11 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
                    >
                      <ContactIcon kind={link.kind} className="size-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Portrait (or monogram until public/images/profile.jpg exists) */}
        <div className="hero-in w-52 sm:w-60 md:w-64 [animation-delay:200ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-paper-deep ring-1 ring-line">
            {showPhoto ? (
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                priority
                sizes="(min-width: 768px) 256px, 240px"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center" role="img" aria-label={`${profile.name} monogram`}>
                <div className="grid size-28 place-items-center rounded-[6px] border-[3px] border-accent/90 font-display text-4xl text-accent">
                  {initials}
                </div>
              </div>
            )}
          </div>
          {profile.graduation && (
            <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
              Graduating {profile.graduation}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
