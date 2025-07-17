import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SmallCards from "./SmallCards";
import Container from "./Container";
import FrameOne from "../assets/Frame.svg";
import FrameTwo from "../assets/Frame2.svg";
import FramThree from "../assets/Frame3.svg";

const frames = [
    { image: FrameOne },
    { image: FrameTwo, css: "-mt-10" },
    { image: FramThree, css: "mt-5" },
];

export default function Ranking() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.15, once: true });

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="min-h-screen relative bg-black mt-10  flex gap-2 pt-10 pb-10 flex-col justify-center items-center w-full font-hubot"
        >
            <Container>
                <div className="flex pt-14  snap-start flex-col gap-10 justify-center items-center px-4 sm:px-0">
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                        className="text-3xl font-hubot sm:text-5xl font-bold text-white text-center leading-tight"
                    >
                        Wygraj niesamowite nagrody
                    </motion.h2>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        className="-mt-4"
                    >
                        <button className="bg-[#DBFD01] py-[8px] text-[16px] uppercase leading-[100%] font-bold font-hubot font-semicondensed md:w-[153px] md:h-[48px] h-[40px] w-[140px] min-w-[120px] fill-transparent">
                            pobierz apkę
                        </button>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-hubot font-bold text-white text-center">
                            Ranking miesięczny
                        </h2>
                    </motion.div>

                    {/* Frames */}
                    <div className="flex relative justify-center mt-4 w-full items-end gap-3">
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
                    {/* SmallCards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                        className="mt-8 sm:mt-24  w-full"
                    >
                        <SmallCards />
                    </motion.div>
                </div>
            </Container>
        </motion.div>
    );
}
