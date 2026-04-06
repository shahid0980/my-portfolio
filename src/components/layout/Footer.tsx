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
    <footer className="border-t dark-border py-8 px-6 lg:px-12 dark-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-label dark-text-muted text-center">
          REDUCE TO ESSENTIALS | VOL. 01 | FUNCTION DICTATES FORM
        </p>
        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="dark-text-muted hover:dark-text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
