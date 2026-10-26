/**
 * ============================================================================
 *  YOUR CONTENT — EDIT THIS FILE
 * ============================================================================
 *
 *  Almost everything written on your website comes from this one file.
 *  Change the text between the quote marks "like this", save the file, and the
 *  website updates (if "npm run dev" is running, the browser refreshes itself).
 *
 *  THREE RULES
 *  1. Empty text ""  or an empty list []  is HIDDEN on the live site.
 *     So you never show a broken link or a half-finished placeholder.
 *     While you run the site on your own computer, a yellow "Setup checklist"
 *     box at the top of the page lists everything that is still empty.
 *     That box never appears on the published site.
 *  2. Keep the punctuation: every "text" needs its quote marks, and items in a
 *     list are separated by commas. If something turns red in your editor, a
 *     quote mark or comma is usually missing.
 *  3. Only write facts you can talk about in an interview. No guessed dates,
 *     numbers or achievements.
 *
 *  Lines starting with // are notes for you. The website ignores them.
 * ============================================================================
 */

import type {
  Activity,
  Photo,
  Contact,
  ExperienceItem,
  Language,
  Profile,
  Project,
  SkillGroup,
} from "./types";

/* ----------------------------------------------------------------------------
 * 1. PROFILE — name, intro, about, photo, CV
 * ------------------------------------------------------------------------- */
export const profile: Profile = {
  name: "Choudhury Riz Rahman",
  role: "Digital Business & Innovation Student",
  university: "Tokyo International University",
  graduation: "March 2027",
  location: "Japan",
  positioning: ["Business", "Technology", "People"],

  intro:
    "I'm interested in where business thinking meets technology: using data, digital products and good design to solve practical problems for real people.",

  about: [
    "I'm a fourth-year Digital Business & Innovation student at Tokyo International University. My studies sit between business and technology, and that's where I want to work: understanding a business problem first, then finding the right data, tools or product to solve it.",
    "I'm developing my technical skills by building things. My current project is a dashboard that turns a hotel's Excel records into information the owners can act on. Alongside my studies I've been Vice President of TEDxTIU, interned in partnerships at Socious, helped teach beginner coding as a student assistant, and worked in customer-facing jobs across retail, tourism and teaching, which taught me to start with the person on the other side.",
  ],

  quickFacts: [
    { label: "Studying", value: "Digital Business & Innovation, TIU" },
    { label: "Based in", value: "Japan" },
    { label: "Languages", value: "English · Japanese · Bengali · Hindi · Urdu" },
  ],

  // PHOTO: put your photo at  public/images/profile.jpg
  // Until that file exists, the site shows a monogram instead (no broken image).
  photo: {
    src: "/images/profile.jpg",
    alt: "Choudhury Riz Rahman at TEDxTIU",
  },

  // CV: put your PDF at  public/resume.pdf
  // Until that file exists, every "Download CV" button is hidden automatically.
  resume: "/resume.pdf",

  // After you deploy, paste your website address here, e.g. "https://riz-rahman.vercel.app"
  // It makes link previews (LinkedIn, LINE, Slack) show the right address. Optional.
  siteUrl: "https://riz-rahman.vercel.app",
};

/* ----------------------------------------------------------------------------
 * 1b. SECTION HEADINGS — the large titles above each section
 * ------------------------------------------------------------------------- */
export const headings = {
  about: "Start with the problem, then choose the tool.",
  experience: "Study, leadership, and a lot of time with customers.",
  projects: "What I'm building.",
  skills: "What I bring to a team.",
  leadership: "Leading, organising, supporting.",
  contactTitle: "Let's build something useful.",
  contactText:
    "I'm looking for internship and graduate opportunities where business, technology and people meet. The best way to reach me is below.",
  footerLine: "Digital Business & Innovation",
};

/* ----------------------------------------------------------------------------
 * 1c. PHOTOS — pictures shown around the site
 *    Files live in  public/images/gallery/
 *    To swap a photo: replace the file and keep the same name.
 *    To remove one: delete its { ... } block, or delete the file (missing
 *    files are skipped automatically).
 * ------------------------------------------------------------------------- */
export const photos: {
  about: Photo;
  leadership: Photo[];
  contactBackground: Photo;
} = {
  // Shown next to the About text
  about: {
    src: "/images/gallery/about-presenting.jpg",
    alt: "Riz presenting an expansion strategy to a class",
    caption: "Presenting a business expansion strategy", // CHECK: describe the occasion
  },
  // Shown under the Leadership section. The first photo is shown largest.
  leadership: [
    {
      src: "/images/gallery/tedx-team.jpg",
      alt: "The TEDxTIU team posing together on stage",
      caption: "With the TEDxTIU team",
    },
    {
      src: "/images/gallery/tedx-on-stage.jpg",
      alt: "Riz speaking on the TEDxTIU stage",
      caption: "On stage at TEDxTIU",
    },
    {
      src: "/images/gallery/tedx-many-paths.jpg",
      alt: "TEDxTIU members holding a Many Paths, One Destination poster",
      caption: "TEDxTIU: “Many Paths, One Destination”",
    },
  ],
  // Faint background behind the dark Contact section
  contactBackground: {
    src: "/images/gallery/tedx-audience.jpg",
    alt: "",
    caption: "",
  },
};

/* ----------------------------------------------------------------------------
 * 2. CONTACT — leave "" to hide a link
 * ------------------------------------------------------------------------- */
export const contact: Contact = {
  email: "riz.chowdhury03@gmail.com", // e.g. "your.name@example.com"  (just the address, no "mailto:")
  linkedin: "https://www.linkedin.com/in/riz-rahman-choudhury-9074752bb", // full address, e.g. "https://www.linkedin.com/in/your-name"
  github: "https://github.com/rizchowdhury03", // full address, e.g. "https://github.com/your-username"
};

/* ----------------------------------------------------------------------------
 * 3. EXPERIENCE & EDUCATION
 *    type must be one of: "Education", "Internship", "University", "Leadership", "Work"
 *    The site groups entries by type in that order. Within a group, the order
 *    here is the order on the page, so put the most recent first.
 *    If "period" is "", the site shows "duration" instead (or nothing).
 * ------------------------------------------------------------------------- */
export const experience: ExperienceItem[] = [
  {
    organisation: "Tokyo International University",
    role: "BSc Digital Business & Innovation (Faculty of Economics, E-Track)",
    type: "Education",
    period: "Apr 2023 – Mar 2027 (expected)",
    duration: "",
    location: "Tokyo, Japan",
    summary:
      "Fourth-year student combining business strategy, data and digital product thinking.",
    highlights: [
      "GPA 3.56 (as of August 2026)",
      "Recipient of the TIU 100% Tuition Reduction Scholarship",
      "Data analytics coursework: analysed retail sales data with Excel pivot tables and built dashboards in Power BI and Tableau to show seasonal best-sellers and changes in spend per customer",
    ],
  },
  {
    organisation: "CIDER International School",
    role: "High School Diploma",
    type: "Education",
    period: "2007 – 2022",
    duration: "",
    location: "Chittagong, Bangladesh",
    summary: "",
    highlights: [
      "Cambridge A Level results: A A A (Mathematics, Physics, Chemistry)",
      "House Captain: coordinated inter-house and inter-school events such as sports days, hackathons and cultural events",
      "Duke of Edinburgh Gold Award (July 2022)",
    ],
  },
  {
    organisation: "Socious · Tech for Impact Summit",
    role: "Partnerships Intern",
    type: "Internship",
    period: "Feb 2026 – May 2026",
    duration: "3 months",
    location: "Tokyo, Japan",
    summary: "Partnerships internship supporting the Tech for Impact Summit.",
    highlights: [
      "Sourced and engaged prospective speakers for the summit",
      "Recruited event volunteers and served as Head of Volunteers during the event",
      "Managed speaker communication and onsite operations for speakers and attendees",
    ],
  },
  {
    organisation: "Tokyo International University",
    role: "Student Assistant (part-time)",
    type: "University",
    period: "Aug 2025 – Dec 2025",
    duration: "",
    location: "Tokyo, Japan",
    summary:
      "Student Assistant for Creative Thinking for AI and IoT Innovations (Fall 2025), supporting Professor Parag Kulkarni with teaching and mentoring.",
    highlights: [
      "Guided students through beginner coding practice in JavaScript, HTML and CSS",
      "Clarified machine learning concepts and gave feedback on semester projects",
    ],
  },
  {
    organisation: "TEDxTIU",
    role: "Vice President",
    type: "Leadership",
    period: "Aug 2024 – Aug 2025",
    duration: "",
    location: "Tokyo International University",
    summary: "Vice President of the student team that plans and runs TEDxTIU, the university's annual TEDx event.",
    highlights: [
      "Oversaw approximately 100 members across multiple event teams",
      "Coordinated team leaders and committees: communication, task allocation and progress towards event goals",
      "After my one-year term, stayed on as an advisor supporting the next team",
    ],
  },
  {
    organisation: "TIUBSS — TIU Bangladeshi Student Association",
    role: "Student Advisor",
    type: "Leadership",
    period: "August 2026 - Current",
    duration: "",
    location: "Tokyo International University",
    summary: "Advisor to the Bangladeshi student community at TIU.",
    highlights: [],
  },
  {
    organisation: "UNIQLO — Frente Sasazuka",
    role: "Store Staff (part-time)",
    type: "Work",
    period: "Aug 2025 – Jul 2026",
    duration: "",
    location: "Tokyo",
    summary: "Sales floor, cashier and bilingual support for Japanese and international shoppers.",
    highlights: [
      "Led the store's daily morning meeting to practise formal business Japanese (keigo)",
      "Within six months, was helping newer staff with keigo",
    ],
  },
  {
    organisation: "Tomonokai Corporation",
    role: "International Exchange Staff (part-time)",
    type: "Work",
    period: "2025 – Jul 2026",
    duration: "",
    location: "Tokyo",
    summary: "Led small-group English communication sessions for 5–6 students.",
    highlights: ["Designed interactive activities to improve speaking and listening"],
  },
  {
    organisation: "Street Kart Shibuya Annex",
    role: "Receptionist (part-time)",
    type: "Work",
    period: "Jul 2024 – Aug 2025",
    duration: "",
    location: "Shibuya, Tokyo",
    summary: "Welcomed and assisted Japanese customers and international tourists in a fast-paced environment.",
    highlights: [],
  },
  {
    organisation: "Live Nippon",
    role: "Tour Guide",
    type: "Work",
    period: "", // TODO: add dates (not on your CV)
    duration: "",
    location: "",
    summary: "Guided visitors in Japan.", // TODO: where / what kind of tours?
    highlights: [],
  },
];

/* ----------------------------------------------------------------------------
 * 4. PROJECTS
 *    published: false  = hidden on the live site (use it for unfinished ideas).
 *    built:     things that WORK today and that you can demo.
 *    roadmap:   things that are planned. Move items from roadmap to built
 *               as you finish them.
 *    screenshots: put images in  public/images/projects/
 *               and name them  <project-id>-1.png, <project-id>-2.png ...
 *               Missing image files are skipped automatically.
 * ------------------------------------------------------------------------- */
export const projects: Project[] = [
  {
    published: true,
    id: "hotel-dashboard",
    title: "Hotel Business Intelligence Dashboard",
    status: "In progress",
    tagline:
      "Turning a family hotel's Excel records into a dashboard the owners can use to make decisions.",
    problem:
      "My father runs a hotel business in Bangladesh, and its records are kept in Excel. The information exists, but questions like \"How full were we last month?\" or \"Which rooms earn the most?\" mean working through spreadsheets by hand.",
    solution:
      "A web application that accepts the hotel's existing Excel data and turns it into a clear dashboard: revenue, occupancy and room performance at a glance, without changing how the staff record data today.",
    intendedUsers:
      "Hotel owners and managers who need quick, reliable numbers for daily and monthly decisions, without being spreadsheet experts.",
    myRole:
      "Planning, designing and building the application, from understanding the owners' needs to the dashboard itself.",
    technologies: [
      // Add tools only once you've used them in this project, e.g. "Next.js", "TypeScript", "SheetJS"
    ],
    skills: [
      "Business analysis",
      "Requirements gathering",
      "Data modelling",
      "Dashboard & UX design",
      "Web development",
    ],
    built: [
      // Move items here from "roadmap" once they actually work.
    ],
    roadmap: [
      "Import hotel data from Excel files",
      "Daily and monthly revenue",
      "Occupancy rate and occupied rooms",
      "Room rates",
      "Check-ins and check-outs",
      "Revenue trends over time",
      "Room-by-room performance",
    ],
    keyLearning: "", // TODO: add once you have a real lesson to share
    dataNote:
      "Any public demo uses synthetic sample data. No real guest or financial information is shown.",
    screenshots: [
      { src: "/images/projects/hotel-dashboard-1.png", alt: "Hotel dashboard overview screen" },
      { src: "/images/projects/hotel-dashboard-2.png", alt: "Hotel dashboard room performance view" },
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    published: true,
    id: "event-theme-generator",
    title: "AI-Powered Event Theme Generator",
    status: "Completed",
    tagline:
      "One moodboard for an event theme: colour palette, décor ideas, music and activities, generated together.",
    problem:
      "Planning TEDxTIU's mini-events meant the team spent a lot of time on ideation, pulling colours, décor, music and activity ideas together from different places.",
    solution:
      "A tool that generates colour palettes, décor ideas, music and activities for a theme and combines them into a single event moodboard.",
    intendedUsers: "The TEDxTIU event-planning team.",
    myRole: "Built the tool (November 2025).",
    technologies: [
      // Add the tools you actually used, e.g. "JavaScript", "OpenAI API"
    ],
    skills: ["AI tools", "Product thinking", "Event planning"],
    built: [
      "Generates colour palettes, décor ideas, music and activity suggestions",
      "Combines them into one event moodboard",
      "Adopted by the TEDxTIU club for mini-event planning",
    ],
    roadmap: [],
    keyLearning: "",
    dataNote: "",
    screenshots: [
      { src: "/images/projects/event-theme-generator-1.png", alt: "Event theme generator moodboard" },
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    published: true,
    id: "graduate-career-platform",
    title: "SQL-Powered Graduate Career Platform",
    status: "In progress",
    tagline:
      "A database platform that matches graduates with master's programmes, careers and internships based on their skills and interests.",
    problem: "",
    solution:
      "An SQL database that matches graduates to master's programmes, careers and internships using their skills and career interests. Built as a class project at Tokyo International University (June 2026).",
    intendedUsers: "TIU graduates and soon-to-be graduates planning their next step.",
    myRole: "",
    technologies: ["SQL"],
    skills: ["Database design", "Data modelling"],
    built: [
      "Matching of graduates to programmes, careers and internships",
      "Tested with mock data",
    ],
    roadmap: ["Pilot launch within the university"],
    keyLearning: "",
    dataNote: "Built and tested with mock data only.",
    screenshots: [
      { src: "/images/projects/graduate-career-platform-1.png", alt: "Graduate career platform" },
    ],
    githubUrl: "",
    liveUrl: "",
  },
];

/* ----------------------------------------------------------------------------
 * 5. SKILLS & LANGUAGES
 *    No percentages or star ratings — they invite awkward interview questions.
 *    Language "level": leave "" until you decide what to write.
 *    Suggestions: "Native", "Fluent", "Professional", "Conversational",
 *    "JLPT N2" (only if you hold the certificate).
 * ------------------------------------------------------------------------- */
export const skills: SkillGroup[] = [
  {
    category: "Business",
    skills: ["Business analysis", "Project management", "Strategy", "Communication", "Leadership"],
  },
  {
    category: "Technology",
    skills: ["Web development", "Data analysis", "Excel", "Power BI", "Tableau", "SQL (beginner)", "Python (beginner)", "HTML/CSS", "AI tools", "Digital products"],
  },
  {
    category: "Design",
    skills: ["UX/UI", "Presentation", "Visual communication"],
  },
];

export const languages: Language[] = [
  { name: "English", level: "Native · TOEIC 970" },
  { name: "Japanese", level: "Conversational · JLPT N3" },
  { name: "Bengali", level: "Native" },
  { name: "Hindi", level: "Conversational" },
  { name: "Urdu", level: "Conversational" },
];

/* ----------------------------------------------------------------------------
 * 6. LEADERSHIP & ACTIVITIES
 *    The Experience section lists your role and dates. This section says what
 *    each activity shows about you, so it doesn't repeat the same information.
 *    An entry with an empty "organisation" is hidden.
 * ------------------------------------------------------------------------- */
export const activities: Activity[] = [
  {
    organisation: "TEDxTIU",
    focus: "Event management & team leadership",
    description:
      "I joined TEDxTIU as a Speakers Committee member and grew into the team's leadership over three years.",
    points: [
      "Speakers Committee: identified and approached potential speakers inside and outside TIU",
      "Speakers Leader: coordinated the speaker team, assigned responsibilities and managed speaker sourcing",
      "Vice President: helped plan and organise the annual event across all teams",
    ],
  },
  {
    organisation: "TIUBSS",
    focus: "Community & student support",
    description:
      "As Student Advisor to the TIU Bangladeshi Student Association, supporting fellow students and the community on campus.",
    points: [],
  },
  {
    // Example of an extra activity. Fill in "organisation" to make it appear.
    organisation: "",
    focus: "", // e.g. "Entrepreneurship" / "Hackathon" / "Volunteering"
    description: "",
    points: [],
  },
];
