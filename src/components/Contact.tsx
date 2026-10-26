/**
 * Contact section. Links come from portfolio.ts → contact. Empty ones are hidden.
 */
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { headings, profile } from "@/data/portfolio";
import { getContactLinks, getPhotos, hasResume } from "@/lib/content";
import { ContactIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Contact() {
  const links = getContactLinks();
  const showResume = hasResume();
  const bg = getPhotos().contactBackground;
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative isolate overflow-hidden bg-ink text-paper">
      {bg && (
        <>
          <Image src={bg.src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30 grayscale" />
          {/* Dark wash keeps the text readable on top of the photo */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/90 to-ink" />
        </>
      )}
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.14em] text-paper/60 uppercase">
            <span className="text-[#e07a5f]">06</span>
            <span className="mx-2" aria-hidden="true">/</span>
            Contact
          </p>
          <h2 id="contact-heading" className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1] tracking-tight text-balance">
            {headings.contactTitle}
          </h2>
          {headings.contactText && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">{headings.contactText}</p>
          )}
        </Reveal>

        {(links.length > 0 || showResume) && (
          <Reveal delay={100} className="mt-14">
            <ul className="divide-y divide-paper/15 border-y border-paper/15">
              {links.map((link) => (
                <li key={link.kind}>
                  <a
                    href={link.href}
                    {...(link.kind !== "email" && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-5 py-5 transition-colors hover:text-[#f0a48c] focus-visible:outline-paper"
                  >
                    <ContactIcon kind={link.kind} className="size-5 shrink-0 text-paper/60 group-hover:text-current" />
                    <span className="w-20 shrink-0 font-mono text-xs tracking-[0.12em] text-paper/60 uppercase">{link.label}</span>
                    <span className="min-w-0 truncate text-lg md:text-xl">{link.display}</span>
                    <ArrowUpRight className="ml-auto size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
              {showResume && (
                <li>
                  <a
                    href={profile.resume}
                    download
                    className="group flex items-center gap-5 py-5 transition-colors hover:text-[#f0a48c] focus-visible:outline-paper"
                  >
                    <Download className="size-5 shrink-0 text-paper/60 group-hover:text-current" aria-hidden="true" />
                    <span className="w-20 shrink-0 font-mono text-xs tracking-[0.12em] text-paper/60 uppercase">CV</span>
                    <span className="text-lg md:text-xl">Download CV (PDF)</span>
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
