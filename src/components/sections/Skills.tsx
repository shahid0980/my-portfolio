import { motion } from "framer-motion";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-lg">
            Technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-5 text-center cursor-default group hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </span>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {skill.name}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
