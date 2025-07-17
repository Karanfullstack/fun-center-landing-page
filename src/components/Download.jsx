import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import SZEF from "../assets/Layer_1.svg";
import DownloadsIcon from "../assets/Stores.svg";
import LeftTopIcon from "../assets/stadion.svg";
import Cup from "../assets/puchar.svg";
import Glasses from "../assets/okularki.svg";
import FootBall from "../assets/pilka.svg";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Download() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            aria-labelledby="download-heading"
            className="min-h-screen snap-start w-full flex font-hubot justify-center items-center sm:items-center bg-black overflow-hidden py-20"
        >
            <motion.article
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative flex h-full w-full flex-col items-center justify-center gap-5 px-4 text-center"
            >
                <motion.figure
                    variants={itemVariants}
                    className="max-w-[200px] sm:max-w-[30px] md:max-w-[30px] lg:max-w-80 w-full h-auto"
                >
                    <img
                        src={SZEF}
                        alt="Postać Szefa aplikacji"
                        className="w-full h-auto object-contain"
                    />
                </motion.figure>

                <motion.h2
                    variants={itemVariants}
                    id="download-heading"
                    className="text-2xl sm:text-5xl md:text-[64px] font-hubot font-bold text-white leading-tight"
                >
                    Dawaj do gry!
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl md:text-[20px] font-medium text-white font-hubot"
                >
                    Pobierz aplikację:
                </motion.p>

                <motion.figure
                    variants={itemVariants}
                    className="max-w-[300px] sm:max-w-[250px] md:max-w-[300px] w-full h-auto"
                >
                    <img
                        src={DownloadsIcon}
                        alt="Ikony sklepów App Store i Google Play"
                        className="w-full h-auto object-contain"
                    />
                </motion.figure>

                {/* Decorative icons */}
                <motion.img
                    variants={itemVariants}
                    className="absolute
                                -top-10 left-2 w-16 h-auto object-contain
                                sm:top-8 sm:left-8 sm:w-16
                                md:-top-16 md:left-56 md:w-28"
                    src={LeftTopIcon}
                    alt=""
                    aria-hidden="true"
                />

                <motion.img
                    variants={itemVariants}
                    className="absolute
                                bottom-30 left-2 w-16 h-auto object-contain
                                sm:bottom-8 sm:left-8 sm:w-16
                                md:bottom-32 md:left-12 md:w-28"
                    src={FootBall}
                    alt=""
                    aria-hidden="true"
                />

                <motion.img
                    variants={itemVariants}
                    className="absolute
                                top-2 right-2 w-16 h-auto object-contain
                                sm:top-8 sm:right-8 sm:w-20
                                md:-top-0 md:right-56 md:w-28"
                    src={Cup}
                    alt=""
                    aria-hidden="true"
                />

                <motion.img
                    variants={itemVariants}
                    className="absolute
                                top-200 right-4 w-16 h-auto object-contain
                                sm:top-50 sm:right-8 sm:w-16
                                md:top-[20.25rem] md:right-14 md:w-28"
                    src={Glasses}
                    alt=""
                    aria-hidden="true"
                />
            </motion.article>
        </section>
    );
}
