import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SmallCards from "./SmallCards";
import Container from "./Container";
import FrameOne from "../assets/Frame.svg";
import FrameTwo from "../assets/Frame2.svg";
import FramThree from "../assets/Frame3.svg";
import "../styles/ranking.module.css";

const frames = [
    { image: FrameOne },
    { image: FrameTwo, css: "-mt-10" },
    { image: FramThree, css: "mt-5" },
];

export default function Ranking() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.15, once: true });

    useEffect(() => {
        const setVH = () => {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        };
        setVH();
        window.addEventListener("resize", setVH);
        return () => window.removeEventListener("resize", setVH);
    }, []);

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="ranking-container  min-h-screen snap-start relative bg-black  flex gap-2  pb-10 flex-col justify-center items-center w-full font-hubot"
        >
            <Container>
                <div className="flex relative pt-14 sm:pt-20 snap-start flex-col gap-10 justify-center items-center px-4 sm:px-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                        className="ranking-title text-3xl font-hubot sm:text-5xl font-bold text-white text-center leading-tight"
                    >
                        Wygraj niesamowite nagrody
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        className="-mt-4"
                    >
                        <button className="ranking-button bg-[#DBFD01] py-[8px] text-[16px] uppercase leading-[100%] font-bold font-hubot font-semicondensed md:w-[153px] md:h-[48px] h-[40px] w-[140px] min-w-[120px] fill-transparent">
                            pobierz apkę
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                    >
                        <h2 className="ranking-subtitle text-2xl sm:text-3xl font-hubot font-bold text-white text-center">
                            Ranking miesięczny
                        </h2>
                    </motion.div>

                    <div className="ranking-frames flex relative justify-center mt-4 w-full items-end gap-0">
                        {frames.map((frame, index) => (
                            <motion.img
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1, y: 0 }
                                        : { opacity: 0, scale: 0.9, y: 20 }
                                }
                                transition={{
                                    duration: 0.4,
                                    delay: 0.4 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                className={`${
                                    frame.css || ""
                                } max-w-[30vw] sm:max-w-none h-auto object-contain`}
                                src={frame.image}
                                alt={`Ranking Frame ${index + 1}`}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                        className=" sm:mt-24 mb-4 ranking-cards w-full"
                    >
                        <SmallCards />
                    </motion.div>
                </div>
            </Container>
        </motion.div>
    );
}
