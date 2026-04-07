<![CDATA[# 🖤 Shahid Khan — Monochrome Portfolio

A sleek, minimal, and performance-driven **developer portfolio** built with React, TypeScript, Tailwind CSS v4, and Vite. Designed with a monochrome aesthetic that emphasizes content clarity, clean typography, and elegant dark/light theme switching.

> **Live Site:** [shahid0980.github.io/my-portfolio](https://shahid0980.github.io/my-portfolio)

---

## 📸 Preview

| Dark Mode | Light Mode |
|-----------|------------|
| 🖥️ Monochrome dark theme with crisp white text | ☀️ Clean white background with sharp black accents |

---

## ✨ Key Features

### 🎨 Design & UX
- **Monochrome Design System** — Pure black/white palette with precisely calibrated grays for both themes
- **Dark / Light Theme Toggle** — Seamless switching with `localStorage` persistence and system preference detection
- **Framer Motion Animations** — Scroll-triggered reveals, staggered entrances, and smooth micro-interactions across all sections
- **Fully Responsive Layout** — Optimized for mobile, tablet, and desktop viewports with a collapsible hamburger menu
- **Custom Scrollbar** — Minimal themed scrollbar matching the monochrome aesthetic
- **Inter Typography** — Google Fonts integration with the Inter typeface (400–800 weights)

### 🧩 Sections
| Section | Description |
|---------|-------------|
| **Hero** | Full-screen landing with name, role, tagline, CTA buttons (Services, Download Resume), and social links |
| **GitHub Profile** | Live GitHub stats panel — avatar, bio, location, join year, repos, commits, followers, contribution heatmap, and top repositories (fetched via GitHub REST API) |
| **About** | Developer bio, tech stack grid, experience stats (projects delivered, years of experience, client satisfaction), and freelance availability status |
| **Services** | Four capability cards — Frontend Development, Backend Development, Database Design, Cloud Deployment — each with tech tags |
| **Skills** | Categorized technology grid (Frontend, Backend, Database, DevOps, Tools, Design, Languages) with hover interactions |
| **Blog** | Blog post previews with title, description, date, tags, and navigation to a dedicated Blog page |
| **Contact** | Two-column layout with contact info (email, phone, location), social links, and a functional contact form |

### ⚡ Technical Highlights
- **Live GitHub Integration** — Custom `useGitHubData` hook fetches profile, repositories, events, and builds a contribution heatmap grid in real-time
- **Client-Side Routing** — React Router v7 with hash-link smooth scrolling for single-page navigation
- **Type-Safe Codebase** — Full TypeScript with strict mode enabled (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- **Downloadable Resume** — One-click PDF resume download from the `/public` directory
- **404 Page** — Custom Not Found page for unmatched routes
- **SEO Optimized** — Descriptive `<title>`, `<meta>` description, semantic HTML structure, and preconnected Google Fonts

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | [React 19](https://react.dev/) | Component-based UI library |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) | Static typing and developer experience |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| **Build Tool** | [Vite 7](https://vite.dev/) | Lightning-fast dev server and bundler |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) | Declarative React animations |
| **Routing** | [React Router v7](https://reactrouter.com/) | Client-side routing with hash-link support |
| **Icons** | [React Icons (Feather)](https://react-icons.github.io/react-icons/) | Lightweight, consistent icon set |
| **Utilities** | [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Conditional class merging |
| **Code Highlighting** | [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) | Blog code block rendering |
| **Deployment** | [GitHub Pages](https://pages.github.com/) via [gh-pages](https://github.com/tschaub/gh-pages) | Static site hosting |
| **Linting** | [ESLint 9](https://eslint.org/) | Code quality enforcement |
| **PostCSS** | [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) | CSS processing pipeline |

---

## 📁 Project Structure

```
my-pflo-4-v-monochorme/
├── public/
│   └── my_resume.pdf                  # Downloadable resume
├── src/
│   ├── assets/
│   │   ├── hero-bg.png                # Hero section background image
│   │   └── profile.jpg               # Profile photo
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Fixed navigation bar with theme toggle & mobile menu
│   │   │   └── Footer.tsx             # Site footer with social links
│   │   ├── pages/
│   │   │   ├── Home.tsx               # Home page — composes all sections
│   │   │   ├── Blog.tsx               # Dedicated blog listing page
│   │   │   └── NotFound.tsx           # Custom 404 error page
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Hero banner + live GitHub profile panel
│   │   │   ├── About.tsx              # About section with stats & tech stack
│   │   │   ├── Freelancer.tsx         # Services/capabilities section
│   │   │   ├── Skills.tsx             # Technologies & tools grid
│   │   │   ├── Blog.tsx               # Blog preview cards on home page
│   │   │   └── Contact.tsx            # Contact form & info section
│   │   └── theme/
│   │       └── ThemeProvider.tsx       # Dark/light theme context provider
│   ├── data/
│   │   ├── blogPosts.ts               # Blog post data
│   │   ├── navMenu.ts                 # Navigation menu links
│   │   ├── personalDetails.ts         # Contact info & social media links
│   │   ├── services.ts                # Service offerings data
│   │   └── skills.ts                  # Skills & technologies data
│   ├── hooks/
│   │   └── github.tsx                 # useGitHubData custom hook (API integration)
│   ├── App.tsx                        # Root layout (Header → Outlet → Footer)
│   ├── Router.tsx                     # Route definitions (React Router v7)
│   ├── main.tsx                       # App entry point with ThemeProvider
│   ├── index.css                      # Global styles & design system
│   └── vite-env.d.ts                  # Vite TypeScript declarations
├── index.html                         # HTML entry point with SEO meta tags
├── package.json                       # Dependencies & scripts
├── tsconfig.json                      # TypeScript configuration (strict mode)
├── tsconfig.node.json                 # TypeScript config for Node.js tooling
├── vite.config.ts                     # Vite configuration
├── postcss.config.js                  # PostCSS plugin configuration
├── eslint.config.js                   # ESLint flat config
└── .gitignore                         # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or **yarn** / **pnpm**)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shahid0980/my-portfolio.git

# 2. Navigate into the project directory
cd my-portfolio

# 3. Install dependencies
npm install
```

### Development

```bash
# Start the Vite development server (hot reload enabled)
npm run dev
```

The app will be available at **http://localhost:5173** by default.

### Production Build

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
# Run ESLint to check for code issues
npm run lint
```

---

## 🌐 Deployment

This project is configured for **GitHub Pages** deployment using the `gh-pages` package.

```bash
# Build and deploy to GitHub Pages in one step
npm run deploy
```

This runs `npm run build` (via the `predeploy` script) and then pushes the `dist/` directory to the `gh-pages` branch.

### Manual Deployment to Other Platforms

| Platform | Instructions |
|----------|-------------|
| **Vercel** | Connect your GitHub repo → auto-detects Vite → deploys on push |
| **Netlify** | Build command: `npm run build` · Publish directory: `dist` |
| **Cloudflare Pages** | Build command: `npm run build` · Output directory: `dist` |

> **Note:** If deploying to a subdirectory (e.g., `github.io/my-portfolio`), update `base` in `vite.config.ts` accordingly:
> ```ts
> export default defineConfig({
>   base: '/my-portfolio/',
>   plugins: [react()],
> })
> ```

---

## 🎨 Customization Guide

### Personal Information

Update your details in the data files under `src/data/`:

| File | What to Edit |
|------|-------------|
| `personalDetails.ts` | Email, phone, location, and social media URLs |
| `services.ts` | Your service offerings, descriptions, and tech tags |
| `skills.ts` | Your technology skills with categories |
| `blogPosts.ts` | Blog post entries (title, description, date, tags) |
| `navMenu.ts` | Navigation menu labels and anchor links |

### Hero Section Content

Edit `src/components/sections/Hero.tsx` to update:
- Your name, role title, and tagline
- CTA button labels and links
- GitHub username (line 22: `useGitHubData('shahid0980')`)

### Resume

Replace `public/my_resume.pdf` with your own resume file.

### Theme & Colors

The design system is defined in `src/index.css`:

```css
/* Light mode palette */
--color-surface: #ffffff;
--color-text-primary: #000000;
--color-text-secondary: #666666;
--color-text-muted: #999999;
--color-border: #e5e5e5;

/* Dark mode background */
.dark { background-color: #0a0a0b; }
```

### Fonts

The project uses **Inter** from Google Fonts. To change it, update:
1. The `<link>` tag in `index.html`
2. The `--font-family-sans` variable in `src/index.css`

---

## 🔗 GitHub Integration

The portfolio features a **live GitHub profile panel** powered by a custom `useGitHubData` hook (`src/hooks/github.tsx`) that fetches:

| Data | API Endpoint |
|------|-------------|
| Profile (avatar, bio, repos count, followers) | `GET /users/{username}` |
| Repositories (top 6, sorted by last updated) | `GET /users/{username}/repos?sort=updated&per_page=6` |
| Events (last 100 public events) | `GET /users/{username}/events/public?per_page=100` |

The hook also:
- **Calculates total recent commits** from `PushEvent` payloads
- **Builds a contribution heatmap grid** (7 rows × 20 columns ≈ 140 days) with 5 intensity levels
- Handles **loading states**, **errors**, and **request cancellation** via `AbortController`

> ⚠️ **Rate Limiting:** The GitHub REST API has a limit of **60 requests/hour** for unauthenticated requests. For higher limits, you can add a personal access token.

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Dev** | `npm run dev` | Start Vite development server with HMR |
| **Build** | `npm run build` | Create production-optimized build in `dist/` |
| **Preview** | `npm run preview` | Locally preview the production build |
| **Lint** | `npm run lint` | Run ESLint across the project |
| **Deploy** | `npm run deploy` | Build and deploy to GitHub Pages |

---

## 🧑‍💻 About the Developer

**Shahid Khan** — Full Stack Developer & Freelancer based in Odisha, India.

Specializing in building high-fidelity web applications, scalable systems, and modern technical solutions using React, Node.js, TypeScript, and cloud technologies.

### Connect

| Platform | Link |
|----------|------|
| 🌐 Portfolio | [shahid0980.github.io/my-portfolio](https://shahid0980.github.io/my-portfolio) |
| 💼 LinkedIn | [linkedin.com/in/shahid-khan-073157157](https://www.linkedin.com/in/shahid-khan-073157157/) |
| 🐙 GitHub | [github.com/shahid0980](https://github.com/shahid0980) |
| 📸 Instagram | [instagram.com/shahid_khan__0980](https://www.instagram.com/shahid_khan__0980/) |
| 📧 Email | [khans0980@gmail.com](mailto:khans0980@gmail.com) |

---

## 📄 License

This project is open source and available for personal use and learning purposes.

---

<p align="center">
  <sub>Designed & Developed with 🖤 by <strong>Shahid Khan</strong></sub>
  <br/>
  <sub>REDUCE TO ESSENTIALS | VOL. 01 | FUNCTION DICTATES FORM</sub>
</p>
]]>
