# Riz Rahman: Portfolio Website

Your personal portfolio, built with Next.js, React, TypeScript and Tailwind CSS.
No database, no paid services. It runs free on Vercel.

**The one file you'll edit most:** `src/data/portfolio.ts`

---

## Quick reference: what controls what

| I want to change...                          | Edit this                                             |
| -------------------------------------------- | ----------------------------------------------------- |
| Name, intro, About text, quick facts         | `src/data/portfolio.ts` → `profile`                   |
| Big section titles, contact message, footer line | `src/data/portfolio.ts` → `headings`              |
| Email, LinkedIn, GitHub                      | `src/data/portfolio.ts` → `contact`                   |
| Jobs, internship, education, dates           | `src/data/portfolio.ts` → `experience`                |
| Projects (text, status, links, roadmap)      | `src/data/portfolio.ts` → `projects`                  |
| Skills and language levels                   | `src/data/portfolio.ts` → `skills`, `languages`       |
| Leadership & activities                      | `src/data/portfolio.ts` → `activities`                |
| Profile photo                                | replace `public/images/profile.jpg`                   |
| Project screenshots                          | `public/images/projects/`                             |
| CV                                           | replace `public/resume.pdf`                           |
| Colours                                      | `src/app/globals.css` (the `@theme` block at the top) |

You should almost never need to open `src/components/`. That folder is the design; `portfolio.ts` is the content.

### The "empty = hidden" rule

Anything left as `""` (empty text) or `[]` (empty list) is **hidden** on the website. That's how the site avoids broken links and half-finished placeholders:

- No `public/resume.pdf` → every "Download CV" button is hidden.
- No `public/images/profile.jpg` → a "CR" monogram is shown instead.
- `contact.github: ""` → no GitHub icon anywhere.
- A project with `published: false` → not shown at all.
- A screenshot path whose file doesn't exist → skipped.

When you run the site on your own computer, a **yellow "Setup checklist" bar** at the top of the page lists everything still missing. It never appears on the live website.

---

## Folder structure

```
riz-portfolio/
├── public/                     ← files served as-is (images, CV)
│   ├── resume.pdf              ← YOUR CV goes here (you add it)
│   └── images/
│       ├── profile.jpg         ← YOUR photo goes here (you add it)
│       └── projects/           ← project screenshots go here
├── src/
│   ├── data/
│   │   ├── portfolio.ts        ← ★ ALL YOUR CONTENT ★
│   │   └── types.ts            ← describes the content's shape (don't edit)
│   ├── components/             ← one file per page section (design)
│   ├── lib/content.ts          ← hides empty fields, checks files exist
│   └── app/
│       ├── page.tsx            ← puts the sections in order
│       ├── layout.tsx          ← page title, fonts, link previews
│       ├── globals.css         ← colours and fonts
│       ├── icon.svg            ← the browser-tab icon (favicon)
│       └── opengraph-image.tsx ← the preview image when your link is shared
├── package.json                ← list of tools the project uses
└── README.md                   ← this guide
```

---

## Words you'll see

- **Terminal**: a window where you type commands instead of clicking. On Windows we'll use the one built into VS Code.
- **Node.js**: the program that runs the website on your computer.
- **npm**: comes with Node.js. Downloads the building blocks the site needs (into a `node_modules` folder).
- **Git**: saves snapshots ("commits") of your project's history.
- **GitHub**: a website that stores your Git project online.
- **Vercel**: a website that takes your project from GitHub and publishes it at a public address. Every time you push a change to GitHub, Vercel updates the live site automatically.
- **Deploy**: publish the website.
- **localhost:3000**: the address of the site running only on your own computer. Nobody else can see it.

---

## 1. Install the software (Windows, one time only)

1. **Node.js**: go to <https://nodejs.org>, download the **LTS** version, run the installer, accept the defaults.
2. **Git**: go to <https://git-scm.com/download/win>, download, install with the default options.
3. **VS Code** (code editor): go to <https://code.visualstudio.com>, download, install. During setup, tick **"Add to PATH"**.
4. **Restart your computer** so Windows finds the new programs.

Check it worked: open VS Code → menu **Terminal → New Terminal**, then type each line and press Enter:

```
node -v
npm -v
git --version
```

Each should print a version number (Node must be **20.9 or higher**). If you see "not recognized", restart the computer and try again.

## 2. Open the project

1. Unzip `riz-portfolio.zip` somewhere easy, e.g. `Documents\riz-portfolio`.
2. In VS Code: **File → Open Folder…** → choose the `riz-portfolio` folder (the one that contains `package.json`).
3. Open a terminal: **Terminal → New Terminal**. It opens *inside* the project folder. **Every command in this guide is run from here.**
   (Check: the terminal line should end with `\riz-portfolio>`.)

> If Windows says *"running scripts is disabled on this system"* when you run `npm`, run this once, then try again:
> `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` (type `Y` if asked).

## 3. Install the project's dependencies (one time, and after changing package.json)

```
npm install
```

Takes 1–2 minutes. It creates a `node_modules` folder. Never edit or upload that folder.

## 4. Run the website on your computer

```
npm run dev
```

Wait for `Ready`, then open **<http://localhost:3000>** in your browser.

- Leave the terminal running. Every time you **save** a file, the browser updates by itself.
- To stop the site: click in the terminal and press **Ctrl + C**.

## 5. Edit your content

1. Open `src/data/portfolio.ts` in VS Code.
2. Change text between the quote marks. Save with **Ctrl + S**.
3. Look at the browser.

Tips:
- Text with an apostrophe inside double quotes is fine: `"I'm a student"`.
- If you need a double quote *inside* the text, write `\"`, e.g. `"questions like \"How full were we?\""`.
- A red squiggly line means a typo: usually a missing `"`, `,` or `]`. Hover over it to see the message.
- To add another experience entry: copy a whole `{ ... },` block (from `{` to `},`), paste it below, then edit it.
- To **publish a new project**: fill in Project 02's fields and change `published: false` to `published: true`.
- As features of the hotel dashboard start working, **move them** from `roadmap` to `built`. The site shows "Working now" vs "Roadmap · planned, not built yet" separately, so recruiters can see real progress.

## 6. Photos and screenshots

**Profile photo**
- Save your photo as `public/images/profile.jpg` (portrait shape works best, about 800 × 1000 px, under 500 KB).
- To change it later, replace the file and **keep the same name**. Nothing else to edit.
- If you want a different name (e.g. `profile-2027.png`), put it in `public/images/` and change `profile.photo.src` in `portfolio.ts` to `"/images/profile-2027.png"`.

**Project screenshots**
- Naming rule: `<project id>-<number>.png`, e.g. `hotel-dashboard-1.png`, `hotel-dashboard-2.png`.
- Put them in `public/images/projects/`.
- The hotel project already points to `hotel-dashboard-1.png` and `hotel-dashboard-2.png`. Add those files and they appear. To add a third, add a line to its `screenshots` list:
  `{ src: "/images/projects/hotel-dashboard-3.png", alt: "Describe what the screenshot shows" },`
- Landscape images (about 1600 × 1000) look best. Screenshots must use **synthetic sample data**, never real guest or financial data.

Paths in `portfolio.ts` start with `/` and **leave out** the word `public`: the file `public/images/profile.jpg` is written `"/images/profile.jpg"`.

The site resizes and compresses images automatically when published.

## 7. Your CV

Export your CV as PDF and save it as **`public/resume.pdf`** (exactly that name, lowercase). The "Download CV" buttons appear automatically. To update your CV, replace the file with the same name.

> Your CV becomes public. Remove your home address, phone number and date of birth from the online version if you don't want strangers to have them.

## 8. Check for errors before publishing

Stop the dev server (Ctrl + C), then run:

```
npm run check
npm run build
```

- `npm run check` finds typos in the code and content files. No output = good.
- `npm run build` creates the real website exactly as Vercel will. If it ends with a list of routes and no red `Error`, you're ready.
- Optional: `npm run start`, then open <http://localhost:3000> to see the production version (the yellow checklist won't show here, just like online).

If the build fails, the error message names the file and line number. 9 times out of 10 it's a missing quote or comma in `portfolio.ts`.

## 9. Upload the code to GitHub (first time)

1. Create a free account at <https://github.com>.
2. Click **+** (top right) → **New repository**. Name it `portfolio`. Keep it **Public** (recruiters can then see your code), **don't** tick "Add a README". Click **Create repository**.
3. In the VS Code terminal (in the project folder), run these one by one. Replace the name/email with yours, and `YOUR-USERNAME` with your GitHub username:

```
git init
git config --global user.name "Choudhury Riz Rahman"
git config --global user.email "you@example.com"
git add .
git commit -m "First version of my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

The first `git push` opens a browser window asking you to sign in to GitHub. Approve it.
Refresh the GitHub page: your files are there (without `node_modules`, which is correct).

## 10. Publish on Vercel (free)

1. Go to <https://vercel.com/signup> and choose **Continue with GitHub**. Select the free **Hobby** plan (for personal, non-commercial projects).
2. Click **Add New… → Project**, find your `portfolio` repository, click **Import**.
3. Vercel detects Next.js automatically. **Don't change any settings.** Click **Deploy**.
4. After about a minute you get a public address like `https://portfolio-xxxx.vercel.app`.
5. Optional: rename it in **Project → Settings → Domains** (e.g. `riz-rahman.vercel.app`, if available).
6. Copy your final address into `portfolio.ts` → `profile.siteUrl`, then do step 11 once so link previews use it.

## 11. Update the live site later

Every time you change something:

```
npm run build
git add .
git commit -m "Describe what you changed, e.g. Add hotel dashboard screenshots"
git push
```

Vercel notices the push and republishes in about a minute. If a build fails on Vercel, your previous version stays online, so a mistake never takes your site down. Check **Vercel → your project → Deployments** to see what happened.

---

## Before you show this to a recruiter

- [ ] `public/images/profile.jpg`: a clear, professional photo
- [ ] `public/resume.pdf`: your current CV (personal details trimmed for public view)
- [ ] `contact.email`, `contact.linkedin`, `contact.github` filled in
- [ ] Dates for Socious, TIUBSS, UNIQLO, Tomonokai, Live Nippon, Street Kart
- [ ] Socious: 1–3 concrete facts about what you did
- [ ] TEDxTIU: 1–3 concrete facts (what you organised, coordinated, decided)
- [ ] Tomonokai / Live Nippon: confirm whether each was paid work or volunteering, and who you taught/guided
- [ ] Language levels (only ones you can back up, e.g. JLPT certificate)
- [ ] Hotel dashboard: at least one real screenshot with sample data, and a GitHub link
- [ ] Read every sentence in `portfolio.ts` and delete anything you can't explain in an interview
- [ ] `profile.siteUrl` set after deploying
- [ ] Open the live site on your phone and click every link
