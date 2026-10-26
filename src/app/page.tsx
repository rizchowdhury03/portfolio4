/**
 * The home page: puts the sections together in order.
 * To change TEXT, edit src/data/portfolio.ts instead of this file.
 * To hide a whole section, put // in front of its line below.
 */
import { profile } from "@/data/portfolio";
import { getActivities, getPublishedProjects } from "@/lib/content";
import { About } from "@/components/About";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SetupChecklist } from "@/components/SetupChecklist";
import { Skills } from "@/components/Skills";

// Initials for the monogram, e.g. "Choudhury Riz Rahman" → "CR" (first two words).
const initials = profile.name
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((w) => w[0]?.toUpperCase())
  .join("");

export default function HomePage() {
  const nav = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    ...(getPublishedProjects().length > 0 ? [{ href: "#projects", label: "Projects" }] : []),
    { href: "#skills", label: "Skills" },
    ...(getActivities().length > 0 ? [{ href: "#leadership", label: "Leadership" }] : []),
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <SetupChecklist />
      <Header name={profile.name} initials={initials} nav={nav} />
      <main id="main">
        <Hero initials={initials} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
