import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "12+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl" />
              <img
                src="https://res.cloudinary.com/dhcvk2b2u/image/upload/v1771437017/portfolio-website-images/about_pcwij3.jpg"
                alt="About Shahid Khan"
                className="relative w-full h-[450px] object-cover rounded-2xl ring-1 ring-slate-200/50 dark:ring-slate-700/50"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              A passionate developer who loves to create
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a Full Stack Developer with a strong foundation in building
                scalable, efficient, and user-friendly web applications. I work
                across both frontend and backend, turning ideas into reliable
                digital products.
              </p>
              <p>
                My core skill set includes React.js, Node.js, MongoDB,
                PostgreSQL, Docker, AWS, and Python. I enjoy designing clean user
                interfaces, developing secure backend APIs, and deploying
                applications using modern cloud and container technologies.
              </p>
              <p>
                I hold a Bachelor's degree in Science, which has strengthened my
                analytical thinking and problem-solving approach. I'm always
                eager to learn new technologies and build solutions that make a
                real impact.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
