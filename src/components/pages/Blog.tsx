import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { Link } from "react-router";
import { allPosts } from "../../data/blogPosts";


const BlogPage = () => {
    const [filter, setFilter] = useState("ALL");

    const categories = ["ALL", "Development", "Engineering", "AI"];

    const filteredPosts = filter === "ALL"
        ? allPosts
        : allPosts.filter(post => post.category === filter);

    return (
        <section id="blogs" className="min-h-screen dark-bg pt-32 pb-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <header className="mb-20 border-b dark-border pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-label dark-text-muted mb-4">— INDEX_REPOSITORY</p>
                        <h1 className="text-5xl md:text-7xl font-bold dark-text-primary mb-8 tracking-tighter">
                            TECHNICAL <br />
                            <span className="text-blue-500">WRITINGS.</span>
                        </h1>
                        <p className="dark-text-secondary max-w-xl text-lg leading-relaxed">
                            In-depth articles about full-stack development, mobile architecture,
                            and the evolving landscape of AI engineering.
                        </p>
                    </motion.div>
                </header>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
                    <div className="flex gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-label px-4 py-2 border transition-all ${filter === cat
                                    ? "bg-blue-500 border-blue-500 text-white"
                                    : "dark-border dark-text-muted hover:dark-text-primary hover:border-current"
                                    }`}
                            >
                                {cat.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-2 dark-text-muted text-label">
                        <FiSearch />
                        <span>SEARCH_ARCHIVE</span>
                    </div>
                </div>

                {/* Blog Grid - Matching your homepage layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-px bg-gray-100 dark:bg-[#222] border dark-border">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="dark-bg p-10 hover:bg-gray-50 dark:hover:bg-[#111113] transition-colors group cursor-pointer relative overflow-hidden"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <span className="text-label dark-text-muted opacity-50 block mb-1">{post.id}</span>
                                    <span className="text-[10px] font-mono text-blue-500">{post.date}</span>
                                </div>
                                <FiArrowRight className="dark-text-muted opacity-50 group-hover:dark-text-primary group-hover:translate-x-2 transition-all" size={20} />
                            </div>

                            <h3 className="text-2xl font-bold dark-text-primary mb-4 group-hover:text-blue-500 transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-dark-text-secondary leading-relaxed mb-8 line-clamp-2">
                                {post.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] font-bold tracking-widest dark-text-muted px-2 py-1 border dark-border group-hover:border-blue-500/30 transition-colors"
                                    >
                                        {tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Link - Back to Home */}
                <div className="mt-20 text-center">
                    <Link to="/" className="text-label dark-text-muted hover:dark-text-primary flex items-center justify-center gap-2 transition-colors">
                        <span>←</span> RETURN_TO_BASE
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;