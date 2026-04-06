import { motion } from "framer-motion";

const skills = [
  { name: "React", category: "FRONTEND" },
  { name: "Next.js", category: "FRONTEND" },
  { name: "TypeScript", category: "LANGUAGES" },
  { name: "Node.js", category: "BACKEND" },
  { name: "MongoDB", category: "DATABASE" },
  { name: "PostgreSQL", category: "DATABASE" },
  { name: "Docker", category: "DEVOPS" },
  { name: "AWS", category: "DEVOPS" },
  { name: "GraphQL", category: "BACKEND" },
  { name: "Tailwind CSS", category: "FRONTEND" },
  { name: "Git", category: "TOOLS" },
  { name: "Figma", category: "DESIGN" },
];

const categories = ["FRONTEND", "BACKEND", "DATABASE", "DEVOPS", "TOOLS", "DESIGN", "LANGUAGES"];

export default function Skills() {
  return (
    <section id="work" className="py-24 px-6 lg:px-12 border-t dark-border dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-label dark-text-muted mb-4">— IO_004_ARCHIVE</p>
          <h2 className="text-3xl md:text-4xl font-bold dark-text-primary leading-tight">
            Technologies & Tools
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-100 dark:bg-[#222]">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="dark-bg p-6 hover:bg-gray-50 dark:hover:bg-[#111113] transition-colors"
            >
              <p className="text-label dark-text-muted opacity-50 mb-3">{skill.category}</p>
              <p className="text-sm font-semibold dark-text-primary">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-16 border-t dark-border"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <span
                key={category}
                className="text-label dark-text-muted px-3 py-2"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
