This is a clean, professionally formatted version of your portfolio’s `README.md`. I have organized it into a logical hierarchy with clear navigation and visual separators so it looks great on GitHub.

***

# 🎨 Monochrome Portfolio v1.0

A high-fidelity, minimalist developer portfolio featuring a live GitHub integration, built with a modern technical stack and a focus on clean typography and motion.

**🔗 [Live Demo](https://shahid0980.github.io/my-portfolio)**

---

## 📸 Preview

| Dark Mode | Light Mode |
| :--- | :--- |
| 🖥️ Monochrome dark theme with crisp white text | ☀️ Clean white background with sharp black accents |

---

## ✨ Key Features

### 🎨 Design & UX
* **Monochrome Design System** — Pure black/white palette with precisely calibrated grays.
* **Dark / Light Theme Toggle** — Seamless switching with `localStorage` persistence and system preference detection.
* **Framer Motion Animations** — Scroll-triggered reveals, staggered entrances, and smooth micro-interactions.
* **Fully Responsive** — Optimized for mobile, tablet, and desktop with a collapsible menu.
* **Inter Typography** — Clean, professional Google Fonts integration (400–800 weights).

### 🧩 Sections
* **Hero:** Full-screen landing with CTA buttons and social links.
* **GitHub Profile:** Real-time stats (repos, commits, followers) and a contribution heatmap fetched via GitHub REST API.
* **About & Services:** Developer bio, tech stack grid, and detailed service capability cards.
* **Skills:** Categorized technology grid with interactive hover states.
* **Blog:** Post previews with navigation to a dedicated blog page.
* **Contact:** Functional form and multi-channel contact information.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | UI Component Library |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) | Type Safety & DX |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS |
| **Build Tool** | [Vite 7](https://vite.dev/) | Bundler & Dev Server |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) | Declarative Animations |
| **Routing** | [React Router v7](https://reactrouter.com/) | Client-side Navigation |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Feather Icon Set |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** ≥ 18.x
* **npm** ≥ 9.x

### Installation & Run
```bash
# 1. Clone the repository
git clone https://github.com/shahid0980/my-portfolio.git

# 2. Navigate to directory
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/       # Header, Footer, Navigation
│   ├── pages/        # Home, Blog, 404
│   ├── sections/     # Hero, About, Skills, Contact, etc.
│   └── theme/        # ThemeProvider context
├── data/             # Centralized content (blog, skills, personal info)
├── hooks/            # Custom hooks (e.g., useGitHubData)
└── assets/           # Images and static media
```

---

## 🎨 Customization Guide

### Personal Information
Edit the files in `src/data/` to update the content:
* `personalDetails.ts`: Update email, phone, and social links.
* `services.ts` & `skills.ts`: Modify your professional offerings and tech stack.
* `blogPosts.ts`: Manage your portfolio's blog entries.

### Hero & GitHub Integration
To link your own GitHub data, update the username in `src/components/sections/Hero.tsx`:
```tsx
const { data } = useGitHubData('your-username');
```

---

## 🌐 Deployment

This project includes a pre-configured deployment script for **GitHub Pages**:
```bash
npm run deploy
```
> **Note:** If deploying to a custom domain or different subdirectory, update the `base` property in `vite.config.ts`.

---

## 🧑‍💻 About the Developer
**Shahid Khan** — Full Stack Developer & Freelancer based in Odisha, India.

| Platform | Link |
| :--- | :--- |
| 💼 **LinkedIn** | [Connect with me](https://www.linkedin.com/in/shahid-khan-073157157/) |
| 🐙 **GitHub** | [@shahid0980](https://github.com/shahid0980) |
| 📧 **Email** | [khans0980@gmail.com](mailto:khans0980@gmail.com) |

---
*Designed & Developed with 🖤 by Shahid Khan*
**FUNCTION DICTATES FORM | VOL. 01**