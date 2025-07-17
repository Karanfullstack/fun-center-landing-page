import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

    return (
        <section
            ref={ref}
            className="min-h-screen font-hubot pt-20 pb-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 bg-black"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col sm:flex-row justify-between gap-y-8 sm:gap-x-4 p-0 sm:p-5 w-full max-w-screen-xl"
            >
                {/* Ranking kolejki */}
                <motion.div
                    variants={itemVariants}
                    className="flex font-hubot flex-col items-start gap-3 w-full"
                >
                    <h2 className="text-[28px] font-bold text-white text-center sm:text-left w-full">
                        Ranking kolejki
                    </h2>

                    <motion.div
                        variants={itemVariants}
                        className="w-full text-white flex items-center justify-between px-4 py-3 bg-[#232323]"
                    >
                        <div className="text-lg flex items-center gap-2">
                            <span className="text-xl font-bold text-[#DBFD01]">1. </span>
                            <span className="text-[14px] font-normal text-left">
                                Bon do wykorzystania w Media Expert
                            </span>
                        </div>
                        <span className="text-[18px] sm:text-[24px] font-bold">500 zł</span>
                    </motion.div>
                </motion.div>

                {/* Ranking klubowy */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-start gap-3 w-full"
                >
                    <h2 className="text-[28px] font-bold text-white text-center sm:text-left w-full">
                        Ranking klubowy (miesięczny)
                    </h2>

                    {[1, 2, 3].map((pos) => (
                        <motion.div
                            key={pos}
                            variants={itemVariants}
                            className="w-full text-white flex items-center justify-between px-4 py-3 bg-[#232323]"
                        >
                            <div className="text-lg flex items-center gap-2">
                                <span className="text-xl font-bold text-[#DBFD01]">{pos}. </span>
                                <span className="text-[14px] font-normal text-left">
                                    Bon do wykorzystania w Media Expert + Wkład Klubu/Ligi
                                </span>
                            </div>
                            <span className="text-[18px] sm:text-[24px] font-bold">500 zł</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
