/**
 * TYPES — the "shape" of the content in portfolio.ts.
 *
 * You normally do NOT need to edit this file. It exists so your code editor
 * can warn you (with a red underline) if you mistype a field name or forget
 * a comma in portfolio.ts.
 *
 * Rule used everywhere on the site:
 *   an empty string ""  or an empty list []  =  "not filled in yet"  =  hidden on the live site.
 */

export type Profile = {
  name: string;
  /** Short role line under your name, e.g. "Digital Business & Innovation Student". */
  role: string;
  university: string;
  /** Shown under your photo, e.g. "March 2027". */
  graduation: string;
  location: string;
  /** The three words of your positioning line: Business × Technology × People. */
  positioning: string[];
  /** One or two sentences shown in the hero (top of the page). */
  intro: string;
  /** About section: each string is one paragraph. Keep it to 2–3 short paragraphs. */
  about: string[];
  /** Short facts shown next to the About text. */
  quickFacts: { label: string; value: string }[];
  photo: {
    /** Path inside the "public" folder, starting with "/". */
    src: string;
    /** Describes the photo for screen readers and search engines. */
    alt: string;
  };
  /** Path to your CV inside the "public" folder. */
  resume: string;
  /** Your live website address once deployed, e.g. "https://riz-rahman.vercel.app". Optional. */
  siteUrl: string;
};

export type Contact = {
  email: string;
  linkedin: string;
  github: string;
};

export type ExperienceType = "Education" | "Internship" | "University" | "Leadership" | "Work";

export type ExperienceItem = {
  organisation: string;
  role: string;
  type: ExperienceType;
  /** Dates, e.g. "Aug 2024 – Aug 2025". Leave "" if you have not added them yet. */
  period: string;
  /** Used only when period is "", e.g. "3 months". */
  duration: string;
  location: string;
  /** One short sentence about the role. */
  summary: string;
  /** Optional bullet points: what you did or learned. Facts only, no guesses. */
  highlights: string[];
};

export type ProjectStatus = "In progress" | "Completed" | "Planned" | "Paused";

export type Project = {
  /** false = hidden from the live site. Switch to true when the project has real content. */
  published: boolean;
  /** Used to build the web address of the project card. Lowercase, no spaces. */
  id: string;
  title: string;
  status: ProjectStatus;
  /** One sentence that sums up the project. */
  tagline: string;
  problem: string;
  solution: string;
  intendedUsers: string;
  myRole: string;
  /** Tools you have ACTUALLY used in the project so far. */
  technologies: string[];
  /** Skills the project demonstrates or is developing. */
  skills: string[];
  /** Features that already work. Only list things you can show. */
  built: string[];
  /** Features that are planned but not working yet. */
  roadmap: string[];
  keyLearning: string;
  /** A short note about data privacy, e.g. that demos use sample data. */
  dataNote: string;
  screenshots: { src: string; alt: string }[];
  githubUrl: string;
  liveUrl: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Language = {
  name: string;
  /** e.g. "Native", "Fluent", "Business level", "JLPT N2". Leave "" until you confirm it. */
  level: string;
};

export type Activity = {
  organisation: string;
  /** A short headline for what this activity shows about you. */
  focus: string;
  description: string;
  /** Optional bullet points. Facts only. */
  points: string[];
};

export type Photo = {
  /** Path inside the "public" folder, starting with "/". */
  src: string;
  /** Describes the photo for screen readers. */
  alt: string;
  /** Short line shown under the photo. Leave "" for none. */
  caption: string;
};
