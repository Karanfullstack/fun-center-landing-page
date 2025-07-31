import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SmallCards from "./SmallCards";
import FrameOne from "../assets/desktop-ranking/Frame-1.png";
import FrameTwo from "../assets/desktop-ranking/Frame-2.png";
import FramThree from "../assets/desktop-ranking/Frame.png";
import "../styles/ranking.module.css";
import RankingTwo from "../components/RankingTwo";
import MotionsFade from "../common/Motions";
import FrameMobile1 from "../assets/mobile-icons/Frame-1.png";
import FrameMobile2 from "../assets/mobile-icons/Frame-2.png";
import FrameMobile3 from "../assets/mobile-icons/Frame.png";

const framesDesktop = [
    { image: FramThree },
    { image: FrameOne, css: "-mt-10" },
    { image: FrameTwo, css: "mt-5" },
];

const framesMobile = [{ image: FrameMobile3 }, { image: FrameMobile1 }, { image: FrameMobile2 }];

export default function Ranking({ onScroll }) {
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
        <>
            <MotionsFade className="">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, transform: "translateY(40px)" }}
                    animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : {}}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="ranking-container  scroll-smooth max-w-[1440px] m-auto  min-h-screen  relative bg-black  flex gap-2    pb-10 flex-col justify-center items-center w-full font-hubot"
                    style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
                >
                    <section className="m-auto max-w-[1360px] w-full">
                        <div className="flex relative pt-14 sm:pt-20  flex-col gap-10 justify-center items-center ">
                            <h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                                className="ranking-title break-words  text-[35px] font-hubot sm:text-5xl font-bold text-white text-center leading-[1.25]"
                            >
                                Wygraj niezłe nagrody
                            </h2>

                            <div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                                className="-mt-4"
                            >
                                <button
                                    onClick={onScroll}
                                    className="ranking-button bg-[#DBFD01] cursor-pointer hover:bg-[#F1FF93] p-1 text-[16px] uppercase leading-[100%] font-bold font-hubot font-semicondensed md:w-[153px] md:h-[48px] h-[48px] w-[153px] min-w-[120px] fill-transparent"
                                >
                                    pobierz apkę
                                </button>
                            </div>

                            <h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                            >
                                <h2 className="ranking-subtitle leading-[1.25] text-[27px] sm:text-3xl font-hubot font-bold text-white text-center">
                                    Ranking miesięczny
                                </h2>
                            </h2>

                            <div className="w-full h-full sm:block hidden ">
                                <div className="ranking-frames  flex relative justify-center mt-4 w-full items-end gap-0">
                                    {framesDesktop.map((frame, index) => (
                                        <motion.img
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.1, y: 20 }}
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
                                            }  sm:w-[300px] h-auto object-contain`}
                                            src={frame.image}
                                            loading="eager"
                                            alt={`Ranking Frame ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* mobile version */}

                            <div className="w-full h-full sm:hidden">
                                <div className="flex justify-center items-end">
                                    {framesMobile.map((f, i) => (
                                        <img
                                            className="max-w-[30vw] h-full"
                                            src={f.image}
                                            alt={`Ranking Frame ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                                className=" sm:mt-4 mb-4 ranking-cards w-full"
                            >
                                <SmallCards />
                            </motion.div>
                        </div>
                    </section>

                    <RankingTwo />
                </motion.div>
            </MotionsFade>
        </>
    );
}
