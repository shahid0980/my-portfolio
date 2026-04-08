import { useScroll, motion, useSpring } from "framer-motion";


const ScrollProgress = () => {


    const { scrollYProgress } = useScroll();


    // const { scrollY } = useScroll()

    // Total scroll height of the entire page
    // const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     let percentage = Math.round(latest / totalScrollHeight * 100);
    //     console.log(percentage);
    // })



    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });



    return (

        <div className="fixed right-0 top-0 bottom-0 w-0.5 z-40">
            <motion.div
                className="fixed right-0 top-0 bottom-0 w-0.5 bg-black/30 dark:bg-white/30 origin-top z-50"
                style={{ scaleY }}
            />
        </div>

    );
};

export default ScrollProgress;