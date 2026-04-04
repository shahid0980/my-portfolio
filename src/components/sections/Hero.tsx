import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight, FiPlay } from "react-icons/fi";
import heroBg from "../../assets/hero-bg.png";

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

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "shahidkhan_CV.pdf";
    link.download = "shahid-resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/80 to-surface" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] bg-magenta/10 rounded-full blur-[80px] animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-primary/30 bg-primary/5 text-primary-light mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Freelance Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6"
          >
            Crafting Digital
            <br />
            <span className="gradient-text">Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            I'm <span className="text-white font-medium">Shahid Khan</span>, a Full Stack Developer 
            specializing in building exceptional digital experiences. Currently 
            focused on creating accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-gradient text-white font-medium text-lg"
            >
              <span>View Services</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <button
              onClick={handleDownload}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-primary/30 hover:border-primary/60 text-white font-medium text-lg hover:bg-primary/5 transition-colors"
            >
              <FiPlay size={20} />
              <span>Download CV</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-surface-card border border-primary/20 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="h-8 w-px bg-primary/20" />
            <div className="text-sm text-slate-500">
              <span className="text-white font-semibold">10+</span> Projects Completed
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
