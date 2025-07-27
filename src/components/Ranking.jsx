import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SmallCards from "./SmallCards";
import FrameOne from "../assets/Frame.svg";
import FrameTwo from "../assets/Frame2.svg";
import FramThree from "../assets/Frame3.svg";
import "../styles/ranking.module.css";
import RankingTwo from "../components/RankingTwo";
import MotionsFade from "../common/Motions";
import { Helmet } from "react-helmet";
const frames = [
    { image: FrameOne },
    { image: FrameTwo, css: "-mt-10" },
    { image: FramThree, css: "mt-5" },
];

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
            <Helmet>
                <link rel="preload" as="image" href={FrameOne} type="image/svg" />
                <link rel="preload" as="image" href={FrameTwo} type="image/svg" />
                <link rel="preload" as="image" href={FramThree} type="image/svg" />
            </Helmet>
            <MotionsFade>
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, transform: "translateY(40px)" }}
                    animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : {}}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="ranking-container snap-start scroll-smooth max-w-[1360px] m-auto  min-h-screen  relative bg-black  flex gap-2  pb-10 flex-col justify-center items-center w-full font-hubot"
                >
                    <section className="m-auto w-full">
                        <div className="flex relative pt-14 sm:pt-20  flex-col gap-10 justify-center items-center ">
                            <h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                                className="ranking-title text-[32px] font-hubot sm:text-5xl font-bold text-white text-center leading-[1.25]"
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
                                    className="ranking-button bg-[#DBFD01] cursor-pointer hover:bg-[#F1FF93] py-[8px] text-[16px] uppercase leading-[100%] font-bold font-hubot font-semicondensed md:w-[153px] md:h-[48px] h-[40px] w-[140px] min-w-[120px] fill-transparent"
                                >
                                    pobierz apkę
                                </button>
                            </div>

                            <h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                            >
                                <h2 className="ranking-subtitle leading-[1.25] text-[28px] sm:text-3xl font-hubot font-bold text-white text-center">
                                    Ranking miesięczny
                                </h2>
                            </h2>

                            <div className="ranking-frames  flex relative justify-center mt-4 w-full items-end gap-0">
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
                                        loading="eager"
                                        alt={`Ranking Frame ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                                className=" sm:mt-20 mb-4 ranking-cards w-full"
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
