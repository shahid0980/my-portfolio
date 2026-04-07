import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";


// interface RouteParams {
//     path: string;
// }


export function NotFound() {
    return (
        <section id="not-found" className="min-h-screen py-24 px-6 lg:px-12 dark-bg flex items-center justify-center border-t dark-border">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Error Message */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-label dark-text-muted mb-4">— ERR_404_NOT_FOUND</p>
                        <h1 className="text-5xl md:text-7xl font-bold dark-text-primary mb-6 leading-tight">
                            Lost in the <br />
                            <span className="text-blue-500">digital void.</span>
                        </h1>
                        <div className="space-y-4 dark-text-secondary leading-relaxed max-w-md">
                            <p>
                                The page you are looking for has been moved, deleted, or
                                never existed in this repository.
                            </p>
                        </div>

                        <div className="mt-12 pt-12 border-t dark-border">
                            <motion.div
                                // href="/"
                                whileHover={{ x: 5 }}
                                className="inline-flex items-center gap-3 text-sm font-bold dark-text-primary tracking-widest uppercase hover:text-blue-500 transition-colors"
                            >
                                <Link to="/">
                                    RETURN_TO_HOME() <span className="text-xl">→</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Decorative Terminal Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:border-l lg:dark-border lg:pl-16 hidden md:block"
                    >
                        <p className="text-label dark-text-muted mb-6">SYSTEM_LOGS</p>

                        <div className="space-y-4">
                            {[
                                "Fetching route metadata...",
                                `Error: ${"undefined"} /unknown not resolved.`,
                                "Searching fallback directories...",
                                "Status: 404 Visualized.",
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    className="p-4 border dark-border dark-text-secondary bg-white/5"
                                >
                                    <p className="text-xs font-mono">
                                        <span className="text-blue-500 mr-2 text-bold">{'>'}</span> {text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 border dark-border bg-red-500/5">
                            <p className="text-label text-red-500 mb-2">CRITICAL_EXCEPTION</p>
                            <p className="text-sm dark-text-primary font-medium italic">
                                "Not all who wander are lost, but this page definitely is."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}