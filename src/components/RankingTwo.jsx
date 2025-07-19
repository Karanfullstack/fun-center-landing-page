import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export default function RankingTwo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Set --vh for mobile height fix
    useEffect(() => {
        const setVH = () => {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        };
        setVH();
        window.addEventListener("resize", setVH);
        return () => window.removeEventListener("resize", setVH);
    }, []);

    return (
        <section
            ref={ref}
            style={{ height: "calc(var(--vh, 1vh) * 100)" }}
            className="snap-start font-hubot bg-black px-4 sm:px-6 md:px-8 pb-6 sm:pb-10 flex flex-col justify-start sm:justify-center items-center w-full"
        >
            <div className="flex flex-col justify-center flex-grow items-center w-full max-w-screen-xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col sm:flex-row justify-between gap-y-8 sm:gap-x-4 w-full"
                >
                    {/* Ranking kolejki */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start gap-3 w-full"
                    >
                        <h2 className="text-[28px] font-bold text-white text-center sm:text-left w-full">
                            Ranking kolejki
                        </h2>

                        <motion.div
                            variants={itemVariants}
                            className="w-full text-white flex items-center justify-between px-4 py-3 bg-[#232323] min-h-[4rem]"
                        >
                            <div className="text-lg flex items-center gap-2 max-w-[80%]">
                                <span className="text-xl font-bold text-[#DBFD01]">1.</span>
                                <span className="text-[0.80rem] sm:text-[1rem] font-normal text-left break-words">
                                    Bon do wykorzystania w Media Expert
                                </span>
                            </div>
                            <span className="text-[18px] sm:text-[24px] font-bold whitespace-nowrap">
                                500 zł
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Ranking klubowy */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-start sm:gap-3 gap-6 w-full"
                    >
                        <h2 className="text-[28px] font-bold text-white text-center sm:text-left w-full">
                            Ranking klubowy (miesięczny)
                        </h2>

                        {[1, 2, 3].map((pos) => (
                            <motion.div
                                variants={itemVariants}
                                className="w-full text-white flex items-center justify-between px-4 py-3 bg-[#232323] min-h-[4rem]"
                            >
                                <div className="text-lg flex flex-col items-start max-w-[80%]">
                                    <div className="flex items-center gap-2 max-w-full">
                                        <span className="text-lg font-bold text-[#DBFD01]">
                                            {pos}.
                                        </span>
                                        <span className="text-[0.80rem] sm:text-[1rem] font-normal text-left whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                                            Bon do wykorzystania w Media Expert
                                        </span>
                                    </div>
                                    <span className="text-[0.75rem] sm:text-[0.85rem] pl-4 leading-tight font-normal text-left">
                                        + Wkład Klubu/Ligi
                                    </span>
                                </div>
                                <span className="text-[18px] sm:text-[24px] font-bold whitespace-nowrap">
                                    500 zł
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
