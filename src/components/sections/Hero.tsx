import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiMapPin, FiCalendar, FiExternalLink, FiStar, FiGitBranch, FiArrowDown } from "react-icons/fi";
import { useGitHubData } from "../../hooks/github";


const socialLinks = [
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/shahid-khan-073157157/", label: "LinkedIn" },
  { icon: FiGithub, href: "https://github.com/shahid0980", label: "GitHub" },
  { icon: FiInstagram, href: "https://www.instagram.com/shahid_khan__0980/", label: "Instagram" },
];

// Contribution intensity levels
function getIntensityClass(count: number): string {
  if (count === 0) return "gh-dot-0";
  if (count === 1) return "gh-dot-1";
  if (count <= 3) return "gh-dot-2";
  if (count <= 5) return "gh-dot-3";
  return "gh-dot-4";
}

export default function Hero() {
  const { profile, repos, totalCommits, contributionGrid, isLoading, error } = useGitHubData('shahid0980');

  console.log("Contribution Grid:", contributionGrid);
  console.log("Total Commits:", totalCommits);
  console.log("Repos:", repos);
  console.log("Profile:", profile);

  const joinYear = profile?.created_at
    ? new Date(profile.created_at).getFullYear()
    : null;

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);


  function handleDownloadResume() {
    const link = document.createElement("a");
    link.href = "my_resume.pdf";
    link.download = "sahid-khan-resume.pdf";
    link.click();
  }


  return (
    <section id="home" className="min-h-screen pt-16 flex flex-col dark-bg">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center lg:flex-row">
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
            Hey There, I&apos;m Shahid Khan
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
            <button onClick={handleDownloadResume} className="btn-outline inline-flex items-center gap-2">
              DOwnload Resume
              <FiArrowDown size={14} />
            </button>
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

        {/* Right Column - GitHub Profile */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className=" lg:flex flex-col px-10 py-16 border-l dark-border min-w-[420px] max-w-[460px]"
        >
          {/* Section Label */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-label dark-text-muted flex items-center gap-2">
              <FiGithub size={12} />
              GITHUB_PROFILE
            </span>
            <span className="text-label dark-text-muted">LIVE</span>
          </div>

          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="gh-loader" />
            </div>
          ) : error ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-label dark-text-muted">[ CONNECTION_ERROR ]</p>
            </div>
          ) : profile ? (
            <div className="flex flex-col gap-6 flex-1">
              {/* Profile Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="gh-avatar-ring">
                  <img
                    src={profile.avatar_url}
                    alt={profile.name || profile.login}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold dark-text-primary truncate">
                    {profile.name || profile.login}
                  </h3>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-label dark-text-muted hover:dark-text-primary transition-colors flex items-center gap-1"
                  >
                    @{profile.login}
                    <FiExternalLink size={10} />
                  </a>
                </div>
              </motion.div>

              {/* Bio */}
              {profile.bio && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm dark-text-secondary leading-relaxed"
                >
                  {profile.bio}
                </motion.p>
              )}

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="flex flex-wrap gap-4"
              >
                {profile.location && (
                  <span className="text-label dark-text-muted flex items-center gap-1">
                    <FiMapPin size={10} />
                    {profile.location}
                  </span>
                )}
                {joinYear && (
                  <span className="text-label dark-text-muted flex items-center gap-1">
                    <FiCalendar size={10} />
                    JOINED {joinYear}
                  </span>
                )}
              </motion.div>

              {/* Divider */}
              <div className="divider" />

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="gh-stat-card">
                  <span className="text-2xl font-bold dark-text-primary">{profile.public_repos}</span>
                  <span className="text-label dark-text-muted mt-1">REPOSITORIES</span>
                </div>
                <div className="gh-stat-card">
                  <span className="text-2xl font-bold dark-text-primary">{totalCommits}</span>
                  <span className="text-label dark-text-muted mt-1">RECENT COMMITS</span>
                </div>
                <div className="gh-stat-card">
                  <span className="text-2xl font-bold dark-text-primary">{profile.followers}</span>
                  <span className="text-label dark-text-muted mt-1">FOLLOWERS</span>
                </div>
                <div className="gh-stat-card">
                  <span className="text-2xl font-bold dark-text-primary">{profile.following}</span>
                  <span className="text-label dark-text-muted mt-1">FOLLOWING</span>
                </div>
              </motion.div>

              {/* Contribution Graph */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-label dark-text-muted">CONTRIBUTION_ACTIVITY</span>
                  <span className="text-label dark-text-muted">~{Math.ceil(contributionGrid[0]?.length * 7 / 7)} WEEKS</span>
                </div>
                <div className="gh-contribution-grid">
                  {contributionGrid.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex gap-[3px]">
                      {row.map((count, colIdx) => (
                        <div
                          key={colIdx}
                          className={`gh-dot ${getIntensityClass(count)}`}
                          title={`${count} contribution${count !== 1 ? 's' : ''}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                {/* Legend */}
                <div className="flex items-center justify-end gap-1 mt-2">
                  <span className="text-label dark-text-muted mr-1" style={{ fontSize: '8px' }}>LESS</span>
                  <div className="gh-dot gh-dot-0" />
                  <div className="gh-dot gh-dot-1" />
                  <div className="gh-dot gh-dot-2" />
                  <div className="gh-dot gh-dot-3" />
                  <div className="gh-dot gh-dot-4" />
                  <span className="text-label dark-text-muted ml-1" style={{ fontSize: '8px' }}>MORE</span>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="divider" />

              {/* Top Repos */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 }}
                className="flex flex-col gap-2"
              >
                <span className="text-label dark-text-muted mb-1">TOP_REPOSITORIES</span>
                {repos.slice(0, 3).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-repo-item"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium dark-text-primary truncate block">
                        {repo.name}
                      </span>
                      {repo.description && (
                        <span className="text-label dark-text-muted truncate block mt-0.5">
                          {repo.description}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {repo.language && (
                        <span className="gh-lang-dot" data-lang={repo.language.toLowerCase()} />
                      )}
                      <span className="text-label dark-text-muted flex items-center gap-0.5">
                        <FiStar size={10} /> {repo.stargazers_count}
                      </span>
                      <span className="text-label dark-text-muted flex items-center gap-0.5">
                        <FiGitBranch size={10} /> {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </motion.div>

              {/* Footer Stats */}
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-label dark-text-muted flex items-center gap-1">
                  <FiStar size={10} /> {totalStars} STARS
                </span>
                <span className="text-label dark-text-muted flex items-center gap-1">
                  <FiGitBranch size={10} /> {totalForks} FORKS
                </span>
                <span className="text-label dark-text-muted">
                  [ SYSTEM_OPTIMAL ]
                </span>
              </div>
            </div>
          ) : null}
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
