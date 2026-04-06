import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useGitHubData, useGitHubRepos } from "../../hooks/github";


const socialLinks = [
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/shahid-khan-073157157/", label: "LinkedIn" },
  { icon: FiGithub, href: "https://github.com/shahid0980", label: "GitHub" },
  { icon: FiInstagram, href: "https://www.instagram.com/shahid_khan__0980/", label: "Instagram" },
];

// Commit frequency data for the dot chart
const commitData = [
  [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1],
  [0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
];

export default function Hero() {
  let { profile, repos, isLoading, error } = useGitHubData('shahid0980');
  console.log("profile", profile);
  return (
    <section id="home" className="min-h-screen pt-16 flex flex-col dark-bg">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Column - Main Content */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 py-16 lg:py-24">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-label dark-text-muted mb-8"
          >
            — IO_001_CURRENT_ROLE
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold dark-text-primary leading-[1.1] mb-8 max-w-3xl"
          >
            Engineering digital experiences with precision.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl dark-text-secondary leading-relaxed mb-12 max-w-xl"
          >
            Full Stack Developer specializing in high-fidelity web applications,
            scalable systems, and technical solutions. Translating complex requirements
            into clean, functional products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#services" className="btn-primary inline-flex items-center gap-2">
              SERVICES_&_CAPABILITIES
              <FiArrowRight size={14} />
            </a>
            <a href="#work" className="btn-outline inline-flex items-center gap-2">
              EXPLORE_WORK()
              <FiArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border dark-border flex items-center justify-center dark-text-muted hover:dark-text-primary hover:border-current transition-all"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Data Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:flex flex-col justify-center px-12 py-24 border-l dark-border min-w-[400px]"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-label dark-text-muted">COMMIT_FREQUENCY</span>
            <span className="text-label dark-text-muted">YTD 2024</span>
          </div>

          {/* Dot Matrix Chart */}
          {/* <div className="flex gap-1 mb-8">
            {commitData.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1">
                {col.map((dot, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="w-3 h-3 rounded-full transition-all dot-matrix"
                    data-active={dot ? "true" : "false"}
                    style={{
                      backgroundColor: dot ? "var(--dot-active, #000)" : "var(--dot-inactive, #F0F0F0)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div> */}

          {/* Chart */}
          <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg text-center">
            github section coming soon.
          </div>



          {/* Status */}
          <div className="text-label dark-text-muted mt-auto">
            [ SYSTEM_OPTIMAL ]
          </div>
        </motion.div>
      </div>

      {/* Footer Bar */}
      <div className="border-t dark-border py-4 px-6 lg:px-12">
        <p className="text-center text-label dark-text-muted">
          REDUCE TO ESSENTIALS | VOL. 01 | FUNCTION DICTATES FORM
        </p>
      </div>
    </section>
  );
}
