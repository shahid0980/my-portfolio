import { motion } from "framer-motion";

const stats = [
    { value: "10+", label: "PROJECTS_DELIVERED" },
    { value: "1+", label: "YEARS_EXPERIENCE" },
    { value: "100%", label: "CLIENT_SATISFACTION" },
];

const techStack = [
    "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "AWS"
];



export function Blog() {
    return (
        <section id="about" className="py-24 px-6 lg:px-12 border-t dark-border dark-bg">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-label dark-text-muted mb-4">— IO_002_ABOUT</p>
                        <h2 className="text-3xl md:text-4xl font-bold dark-text-primary mb-6 leading-tight">
                            Building digital products with precision and clarity.
                        </h2>
                        <div className="space-y-4 dark-text-secondary leading-relaxed">
                            <p>
                                I'm a Full Stack Developer with a strong foundation in building
                                scalable, efficient, and user-friendly web applications. I work
                                across both frontend and backend, turning ideas into reliable
                                digital products.
                            </p>
                            <p>
                                My core skill set includes React.js, Node.js, MongoDB, PostgreSQL,
                                Docker, AWS, and Python. I enjoy designing clean user interfaces,
                                developing secure backend APIs, and deploying applications using
                                modern cloud technologies.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t dark-border">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold dark-text-primary">{stat.value}</p>
                                    <p className="text-label dark-text-muted mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:border-l lg:dark-border lg:pl-16"
                    >
                        <p className="text-label dark-text-muted mb-6">TECH_STACK()</p>

                        <div className="grid grid-cols-2 gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="p-4 border dark-border hover:border-current dark-text-primary transition-colors"
                                >
                                    <p className="text-sm font-medium">{tech}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 border dark-border">
                            <p className="text-label dark-text-muted mb-2">CURRENT_STATUS</p>
                            <p className="text-sm dark-text-primary font-medium">Available for freelance projects</p>
                            <p className="text-sm dark-text-secondary mt-1">Remote • Worldwide</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}