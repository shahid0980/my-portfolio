import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";
import AnimationCompo from "../ui/AnimationCompo";


const stats = [
    { value: "10+", label: "PROJECTS_DELIVERED" },
    { value: "1+", label: "YEARS_EXPERIENCE" },
    { value: "100%", label: "CLIENT_SATISFACTION" },
];

const techStack = [
    "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "AWS"
];

export default function SystemArchitecture() {
    return (
        <section id="featured-site" className="py-24 px-6 lg:px-12 border-t dark-border dark-bg">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Interactive Mockup Area */}


                    <AnimationCompo />


                    {/* Right: Technical Specs */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <p className="text-label dark-text-muted mb-4">— IO_002_CASE_STUDY</p>
                        <h2 className="text-3xl md:text-4xl font-bold dark-text-primary mb-6 leading-tight">
                            MY PORTFOLIO <br />
                            <span className="text-blue-500">SYSTEM ARCHITECTURE</span>
                        </h2>

                        <div className="space-y-6 dark-text-secondary">
                            <p>
                                This application follows a Serverless Frontend Architecture, where the logic and presentation are bundled into a highly optimized client-side package.
                            </p>

                            {/* Tech Tags matching your About section style */}
                            <div className="grid grid-cols-2 gap-3 mt-8">
                                {["NEXT.JS", "TAILWIND", "SEO_OPT", "Vercel"].map((tech) => (
                                    <div key={tech} className="p-3 border dark-border text-[10px] font-mono tracking-widest text-center">
                                        {tech}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 flex gap-6">
                                <a href="#" className="flex items-center gap-2 text-sm font-bold dark-text-primary hover:text-blue-500 transition-colors">
                                    <FiExternalLink /> LIVE_PREVIEW()
                                </a>
                                <a href="https://github.com/shahid0980" className="flex items-center gap-2 text-sm font-bold dark-text-primary hover:text-blue-500 transition-colors">
                                    <FiGithub /> VIEW_SOURCE
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
