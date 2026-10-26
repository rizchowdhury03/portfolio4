/**
 * Helpers that prepare the content from src/data/portfolio.ts for the page.
 * You do not need to edit this file.
 *
 * Main job: hide anything that isn't ready yet, so the live site never shows
 * an empty field, a placeholder project, a missing image or a broken link.
 */
import fs from "node:fs";
import path from "node:path";
import {
  activities,
  photos,
  contact,
  experience,
  languages,
  profile,
  projects,
} from "@/data/portfolio";

/** True when a text field has real content. */
export const filled = (value: string | undefined | null): value is string =>
  typeof value === "string" && value.trim().length > 0;

/** True when a file exists inside the "public" folder (e.g. "/resume.pdf"). */
export function publicFileExists(publicPath: string): boolean {
  if (!filled(publicPath)) return false;
  const filePath = path.join(process.cwd(), "public", publicPath.replace(/^\/+/, ""));
  return fs.existsSync(filePath);
}

/** Photos from portfolio.ts → photos, skipping any whose file is missing. */
export function getPhotos() {
  const ok = (p: { src: string }) => publicFileExists(p.src);
  return {
    about: ok(photos.about) ? photos.about : null,
    leadership: photos.leadership.filter(ok),
    contactBackground: ok(photos.contactBackground) ? photos.contactBackground : null,
  };
}

export const hasPhoto = () => publicFileExists(profile.photo.src);
export const hasResume = () => publicFileExists(profile.resume);

/** Contact links that have been filled in, in display order. */
export function getContactLinks() {
  const links: { kind: "email" | "linkedin" | "github"; label: string; href: string; display: string }[] = [];
  if (filled(contact.email)) {
    links.push({
      kind: "email",
      label: "Email",
      href: `mailto:${contact.email.trim()}`,
      display: contact.email.trim(),
    });
  }
  if (filled(contact.linkedin)) {
    links.push({
      kind: "linkedin",
      label: "LinkedIn",
      href: contact.linkedin.trim(),
      display: contact.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    });
  }
  if (filled(contact.github)) {
    links.push({
      kind: "github",
      label: "GitHub",
      href: contact.github.trim(),
      display: contact.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    });
  }
  return links;
}

/** Published projects only, with missing screenshot files removed. */
export function getPublishedProjects() {
  return projects
    .filter((p) => p.published && filled(p.title))
    .map((p) => ({
      ...p,
      screenshots: p.screenshots.filter((s) => publicFileExists(s.src)),
      technologies: p.technologies.filter(filled),
      skills: p.skills.filter(filled),
      built: p.built.filter(filled),
      roadmap: p.roadmap.filter(filled),
    }));
}

const typeOrder = ["Education", "Internship", "University", "Leadership", "Work"] as const;
const typeHeadings: Record<(typeof typeOrder)[number], string> = {
  Education: "Education",
  Internship: "Internship",
  University: "University roles",
  Leadership: "Leadership roles",
  Work: "Customer-facing work",
};

/** Experience grouped by type (Education → Internship → University → Leadership → Work). */
export function getExperienceGroups() {
  return typeOrder
    .map((type) => ({
      type,
      heading: typeHeadings[type],
      items: experience
        .filter((e) => e.type === type && filled(e.organisation))
        .map((e) => ({ ...e, highlights: e.highlights.filter(filled) })),
    }))
    .filter((group) => group.items.length > 0);
}

export function getActivities() {
  return activities
    .filter((a) => filled(a.organisation))
    .map((a) => ({ ...a, points: a.points.filter(filled) }));
}

export function getLanguages() {
  return languages.filter((l) => filled(l.name));
}

/**
 * Builds the list shown in the yellow "Setup checklist" box.
 * That box is only visible on your own computer (npm run dev), never online.
 */
export function getSetupChecklist(): string[] {
  const todo: string[] = [];
  if (!hasPhoto()) todo.push(`Add your photo at public${profile.photo.src}`);
  if (!hasResume()) todo.push(`Add your CV at public${profile.resume} (Download CV buttons are hidden until then)`);
  if (!filled(contact.email)) todo.push("Add your email in portfolio.ts → contact.email");
  if (!filled(contact.linkedin)) todo.push("Add your LinkedIn URL in portfolio.ts → contact.linkedin");
  if (!filled(contact.github)) todo.push("Add your GitHub URL in portfolio.ts → contact.github");

  experience.forEach((e) => {
    if (filled(e.organisation) && !filled(e.period)) {
      todo.push(`Add dates for "${e.organisation}" (experience → period)`);
    }
  });

  getPublishedProjects().forEach((p) => {
    if (p.screenshots.length === 0) todo.push(`Add screenshots for "${p.title}" in public/images/projects/`);
    if (!filled(p.githubUrl)) todo.push(`Add a GitHub link for "${p.title}" (optional)`);
    if (p.built.length === 0) todo.push(`"${p.title}": nothing is listed as built yet. Move finished features from roadmap to built`);
  });

  if (languages.some((l) => filled(l.name) && !filled(l.level))) {
    todo.push("Add language levels in portfolio.ts → languages (optional)");
  }
  if (!filled(profile.siteUrl)) todo.push("After deploying, add your site address in portfolio.ts → profile.siteUrl");
  return todo;
}
