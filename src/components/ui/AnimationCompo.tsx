import { motion } from "motion/react"



const parentAnimation = {
    hover: {
        rotateX: 0
    },
    initial: {
        rotateX: -70
    },
}

const childAnimation = {
    hover: {
        opacity: 1
    },
    initial: {
        opacity: 0
    }
}

const childAnimation2 = {
    hover: {
        width: '20%'
    },
    initial: {
        width: '10%'
    }
}



export default function AnimationCompo() {
    return (

        <motion.div whileHover="hover" initial="initial" className="w-90 mx-auto perspective-distant ">
            <motion.div className="relative w-[90%] mx-auto h-50 p-1 rounded-t-xl bg-black shadow shadow-gray-400 right-1 ring-black"
                style={{
                    transformOrigin: "bottom"
                }}
                variants={parentAnimation}



                transition={{ duration: 0.10, ease: "easeInOut" }}


            >
                <motion.div
                    variants={childAnimation}
                    className="absolute inset-0 h-full w-full rounded-t-[10px] shadow-[-10px_0_8px_-4px_rgba(255,255,255,0.1),10px_0_8px_-4px_rgba(255,255,255,0.1)] " />

                <motion.div className="w-full h-full rounded-t-[10px] bg-[url(https://res.cloudinary.com/dhcvk2b2u/image/upload/v1775745538/portfolio-website-images/portfolio-site-hero-screenshort_ao3s0m.png)] bg-cover z-0"

                    variants={childAnimation}
                    transition={{ duration: 0.5, ease: "easeInOut" }}


                >

                </motion.div>
                <motion.div
                    variants={childAnimation2}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className=" absolute inset-0 mt-1.5 mx-auto bg-black z-10 w-[20%] h-2 rounded-xl" />





            </motion.div>
            <div className="w-full h-4 rounded-b-xl rounded-t-sm bg-linear-to-b from-gray-400/20 to-gray-400/60">
                <div className="w-[20%] h-[50%] bg-linear-to-b from-gray-400/20 to-gray-400/60 mx-auto rounded-b-sm" />
            </div>
        </motion.div>
    )
}