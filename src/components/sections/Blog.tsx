import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const blogPosts = [
    {
        id: 1,
        title: "Mastering React Native Animations",
        description: "A deep dive into creating fluid 60fps animations in mobile apps using Reanimated.",
        date: "March 15, 2026",
        tags: ["React Native", "UI/UX"],
        link: "#"
    },
    {
        id: 2,
        title: "Why I Switched to PostgreSQL",
        description: "Comparing NoSQL vs SQL for full-stack applications in 2026.",
        date: "Feb 28, 2026",
        tags: ["Database", "Backend"],
        link: "#"
    },
    {
        id: 3,
        title: "The Future of AI in Web Dev",
        description: "How LLMs and AI tools are changing the way we write and ship code.",
        date: "Jan 12, 2026",
        tags: ["AI", "Web Dev"],
        link: "#"
    },

    {
        id: 4,
        title: "The Future of AI in Web Dev",
        description: "How LLMs and AI tools are changing the way we write and ship code.",
        date: "Jan 12, 2026",
        tags: ["AI", "Web Dev"],
        link: "#"
    }
];

const BlogSection = () => {
    return (
        <section id="blogs" className="py-24 px-6 lg:px-12 border-t dark-border dark-bg">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <p className="text-label dark-text-muted mb-4">— IO_005_BLOGS</p>
                    <h2 className="text-3xl md:text-4xl font-bold dark-text-primary leading-tight">
                        BLOGS AND UPDATES
                    </h2>
                </motion.div>

                {/* Services List */}
                <div className="grid md:grid-cols-2 gap-px bg-gray-100 dark:bg-[#222]">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="dark-bg p-8 hover:bg-gray-50 dark:hover:bg-[#111113] transition-colors group"
                        >
                            <Link to={"/blog"} className="flex items-start justify-between mb-6">
                                <span className="text-label dark-text-muted opacity-50">{post.id}</span>

                                <FiArrowRight className="dark-text-muted opacity-50 group-hover:dark-text-primary group-hover:opacity-100 transition-all" size={16} />
                            </Link>
                            <h3 className="text-lg font-bold dark-text-primary mb-3">{post.title}</h3>
                            <p className="text-sm dark-text-secondary leading-relaxed mb-6">
                                {post.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
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
                    <p className="text-label dark-text-muted mb-4">LOOK_UPDATES()</p>
                    <p className="dark-text-secondary mb-8 max-w-lg mx-auto">
                        Stay updated with our latest blog posts and industry insights.
                    </p>
                    <Link to={"/blog"} className="btn-primary inline-flex items-center gap-2">
                        READ_OUR_BLOG
                        <FiArrowRight size={14} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
