import { useState, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../constant/skillsData";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

type ActiveSkill = Skill | null;



const Skills = () => {
  const [active, setActive] = useState<ActiveSkill>(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="skills" className="section-padding transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with regularly
          </p>
        </div>

        {/* --- Expanded Card Overlay --- */}
        <AnimatePresence>
          {active && (
            <>
              {/* Darkened Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-zoom-out"
              />

              {/* The "Popped Up" Card */}
              <div className="fixed inset-0 grid place-items-center z-[60] pointer-events-none">
                <motion.div
                  layoutId={`card-${active.name}-${id}`}
                  className="w-full max-w-[400px] bg-white dark:bg-neutral-900 p-10 rounded-3xl shadow-2xl pointer-events-auto flex flex-col items-center text-center"
                >
                  <motion.div
                    layoutId={`icon-${active.name}-${id}`}
                    className="text-7xl mb-6"
                  >
                    {active.icon}
                  </motion.div>
                  <motion.h3
                    layoutId={`name-${active.name}-${id}`}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {active.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-gray-500"
                  >
                    Expertise in building scalable applications using {active.name}.
                  </motion.p>
                  <button
                    onClick={() => setActive(null)}
                    className="text-black dark:text-white mt-8 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium"
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* --- Main Skills Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              layoutId={`card-${skill.name}-${id}`}
              key={index}
              onClick={() => setActive(skill)}
              className={`${skill.color} p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow cursor-pointer text-center group border border-transparent dark:hover:border-white/10`}
              whileHover={{ y: -5 }}
            >
              <motion.div
                layoutId={`icon-${skill.name}-${id}`}
                className="text-4xl mb-3"
              >
                {skill.icon}
              </motion.div>
              <motion.p
                layoutId={`name-${skill.name}-${id}`}
                className="font-semibold text-gray-800 dark:text-gray-600"
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
