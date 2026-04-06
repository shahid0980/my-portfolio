import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "FRONTEND_DEVELOPMENT",
    description: "Building fast, interactive web applications using React, Next.js, and modern JavaScript frameworks.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    title: "BACKEND_DEVELOPMENT",
    description: "Developing robust APIs and server-side applications with Node.js, Express, and modern database solutions.",
    tags: ["Node.js", "Express", "GraphQL", "REST"],
  },
  {
    number: "03",
    title: "DATABASE_DESIGN",
    description: "Designing efficient database schemas and optimizing queries for scalable applications.",
    tags: ["MongoDB", "PostgreSQL", "Redis", "ORM"],
  },
  {
    number: "04",
    title: "CLOUD_DEPLOYMENT",
    description: "Deploying and managing applications using modern cloud platforms and containerization.",
    tags: ["AWS", "Docker", "CI/CD", "Vercel"],
  },
];

export default function Freelancer() {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 border-t dark-border dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-label dark-text-muted mb-4">— IO_003_SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold dark-text-primary leading-tight">
            Capabilities & Services
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-100 dark:bg-[#222]">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dark-bg p-8 hover:bg-gray-50 dark:hover:bg-[#111113] transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-label dark-text-muted opacity-50">{service.number}</span>
                <FiArrowRight className="dark-text-muted opacity-50 group-hover:dark-text-primary group-hover:opacity-100 transition-all" size={16} />
              </div>
              <h3 className="text-lg font-bold dark-text-primary mb-3">{service.title}</h3>
              <p className="text-sm dark-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label dark-text-muted px-2 py-1 border dark-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-16 border-t dark-border text-center"
        >
          <p className="text-label dark-text-muted mb-4">START_A_PROJECT()</p>
          <p className="dark-text-secondary mb-8 max-w-lg mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            GET_IN_TOUCH
            <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
