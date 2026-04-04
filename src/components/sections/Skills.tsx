import { motion } from "framer-motion";
import skills from "../../data/skills";

const categories = ["Frontend", "Backend", "Database", "DevOps", "Tools", "Design", "Languages"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Technical Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Technologies and tools I use to bring products to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="glass-card p-6 text-center border border-primary/10 hover:border-primary/40 transition-all duration-300">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </span>
                <p className="text-sm font-semibold text-white mb-1">{skill.name}</p>
                <p className="text-xs text-slate-500">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category filters (visual only) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full text-xs font-medium border border-primary/15 bg-primary/5 text-slate-500"
            >
              {category}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
