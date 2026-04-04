import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "1+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "AWS"
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Passionate about creating{" "}
            <span className="gradient-text">impactful</span> digital solutions
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Gradient border frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/50 via-accent/30 to-magenta/30 blur-sm" />
              <div className="relative bg-surface-card rounded-3xl p-2">
                <img
                  src="https://res.cloudinary.com/dhcvk2b2u/image/upload/v1771437017/portfolio-website-images/about_pcwij3.jpg"
                  alt="About Shahid Khan"
                  className="w-full h-[500px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card px-6 py-4 border border-primary/20">
                <p className="text-3xl font-bold gradient-text">1+</p>
                <p className="text-sm text-slate-400">Years Exp.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Full Stack Developer</span> with 
                a strong foundation in building scalable, efficient, and user-friendly web 
                applications. I work across both frontend and backend, turning ideas into 
                reliable digital products.
              </p>
              <p>
                My core skill set includes React.js, Node.js, MongoDB, PostgreSQL, Docker, 
                AWS, and Python. I enjoy designing clean user interfaces, developing secure 
                backend APIs, and deploying applications using modern cloud and container 
                technologies.
              </p>
              <p>
                I hold a Bachelor's degree in Science, which has strengthened my analytical 
                thinking and problem-solving approach. I'm always eager to learn new 
                technologies and build solutions that make a real impact.
              </p>
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-primary/20 bg-primary/5 text-slate-300 hover:border-primary/40 hover:bg-primary/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-border p-5 text-center"
                >
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
