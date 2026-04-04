import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiSmartphone, FiArrowRight } from "react-icons/fi";

const services = [
  {
    icon: FiLayout,
    title: "Web Design",
    description: "Creating stunning, modern UI/UX designs that captivate users and drive engagement. From wireframes to pixel-perfect designs.",
    features: ["UI/UX Design", "Figma to Code", "Responsive Layouts", "Design Systems"],
  },
  {
    icon: FiCode,
    title: "Frontend Development",
    description: "Building fast, interactive, and accessible web applications using React, Next.js, and modern JavaScript frameworks.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Animations"],
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description: "Developing robust APIs and server-side applications with Node.js, Express, and modern database solutions.",
    features: ["Node.js/Express", "REST APIs", "GraphQL", "Database Design"],
  },
  {
    icon: FiSmartphone,
    title: "Full Stack Solutions",
    description: "End-to-end development from concept to deployment. Complete web applications with authentication, payments, and more.",
    features: ["Authentication", "Cloud Deployment", "CI/CD Pipelines", "Performance"],
  },
];

export default function Freelancer() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Freelance <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I offer comprehensive web development services tailored to your needs. 
            From concept to deployment, I deliver high-quality solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary-light group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                    <service.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-primary/15 bg-primary/5 text-slate-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="glass-card p-10 border border-primary/20 max-w-3xl mx-auto relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let's Build Something <span className="gradient-text">Amazing</span> Together
              </h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Have a project in mind? I'm currently available for freelance work. 
                Let's discuss how I can help bring your ideas to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-gradient text-white font-medium"
                >
                  <span>Start a Project</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:khans0980@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary/30 hover:border-primary/50 text-white font-medium hover:bg-primary/5 transition-colors"
                >
                  khans0980@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
