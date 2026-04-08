import { useScroll, motion, useSpring } from "framer-motion";


const ScrollProgress = () => {
    // 1. Get the scroll progress (a value between 0 and 1)
    const { scrollYProgress } = useScroll();

    // 2. Optional: Add a spring physics layer to make the bar feel "bouncy" or smoother
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (

        <div className="fixed right-0 top-0 bottom-0 w-1 bg-gray-100 z-40">
            <motion.div
                className="fixed right-0 top-0 bottom-0 w-0.5 bg-black dark:bg-white origin-top z-50"
                style={{ scaleY }}
            />
        </div>

    );
};

export default ScrollProgress;