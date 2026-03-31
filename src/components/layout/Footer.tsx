import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/shahid0980", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/shahid-khan-073157157/",
    label: "LinkedIn",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/shahid_khan__0980/",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Shahid Khan. Built with React &
          Tailwind CSS.
        </p>
        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
