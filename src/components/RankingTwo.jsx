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
            className=" font-hubot bg-black px-5 sm:px-6 md:px-8 pb-6 sm:pb-10 flex flex-col justify-start sm:justify-center items-center w-full"
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
                        <h2 className="text-[28px] leading-[1.5]  font-bold text-white text-left sm:text-left w-full">
                            Ranking kolejki
                        </h2>

                        <motion.div
                            variants={itemVariants}
                            className="w-full text-white sm:items-center gap-2 flex sm:flex-row flex-col items-start justify-between px-4 py-3 bg-[#232323] min-h-[4rem]"
                        >
                            <div className="text-lg flex flex-col sm:flex-row items-start gap-1 max-w-[80%]">
                                <span className="text-[20px]  leading-[1] font-bold text-[#DBFD01]">
                                    1.
                                </span>
                                <span className="text-[14px] sm:text-[1rem] font-[500] leading-[1.25] text-left break-words">
                                    Bon do wykorzystania w Media Expert
                                </span>
                            </div>
                            <span className="text-[1.5rem] leading-[1.25] sm:text-[24px] font-bold whitespace-nowrap">
                                500 zł
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Ranking klubowy */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:items-center  sm:justify-center items-start sm:gap-3 gap-6 w-full"
                    >
                        <h2 className="text-[28px] leading-[1.5]  font-bold text-white text-left sm:text-left w-full">
                            Ranking klubowy (miesięczny)
                        </h2>

                        {[
                            { pos: 1, price: 500 },
                            { pos: 2, price: 300 },
                            { pos: 3, price: 200 },
                        ].map((pos, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="w-full flex-col sm:flex-row gap-2d  text-white flex sm:items-center justify-between px-4 py-3 bg-[#232323] min-h-[4rem]"
                            >
                                <div className="text-lg flex flex-col items-start max-w-[80%]">
                                    <div className="flex flex-col gap-1  items-start sm:flex-row sm:items-center sm:gap-2 max-w-full">
                                        <span className="text-[20px]  leading-[1] font-bold text-[#DBFD01]">
                                            {pos.pos}.
                                        </span>
                                        <span className="text-[14px] sm:text-[1rem] font-[500] leading-[1.25] text-left break-words">
                                            Bon do wykorzystania w Media Expert
                                        </span>
                                    </div>
                                    <span className="text-[0.75rem] sm:text-[0.85rem] sm:pl-4  leading-tight font-normal text-left">
                                        + Wkład Klubu/Ligi
                                    </span>
                                </div>
                                <span className="text-[1.5rem] leading-[1.25] sm:p-0 pl-2 sm:text-[24px] font-bold whitespace-nowrap">
                                    {pos.price} zł
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
