import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import StickMan from "../assets/animation/lp-boy.json";
import DownloadApple from "../assets/downloadapple.svg";
import DownloadPlay from "../assets/downloadplay.svg";
import Glasses from "../assets/FOOVA-LP-cards/okularki-card.png";
import Football from "../assets/FOOVA-LP-cards/pilka-card.png";
import Cup from "../assets/FOOVA-LP-cards/puchar-card.png";
import Stadion from "../assets/FOOVA-LP-cards/stadion-card.png";
import MotionsFade from "../common/Motions";
import { useLocation } from "react-router-dom";

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
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.6,
            ease: "easeIn",
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
    const isInView = useInView(ref, { margin: "-100px" });
    const location = useLocation();
    useEffect(() => {
        if (typeof window === "undefined") return;

        const scrollToSection = (id) => {
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });

                    history.replaceState(null, "", window.location.pathname);
                }, 100);
            }
        };

        const hash = window.location.hash;

        if (hash === "#download_desktop") {
            scrollToSection("download_desktop");
        } else if (hash === "#download_mobile") {
            scrollToSection("download_mobile");
        }
    }, []);

    const containerRef = useRef(null);
    const tabletContainer = useRef();
    useEffect(() => {
        const hash = window.location.hash;

        if (hash === "#download_desktop" || hash === "#download_mobile") {
            if (containerRef.current && window.innerWidth < 640) {
                // Check if the ref exists and the screen is small (to target mobile)
                containerRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            } else if (
                tabletContainer.current &&
                window.innerWidth >= 768 &&
                window.innerWidth < 1024
            ) {
                tabletContainer.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        }
    }, []);
    return (
        <>
            {/* Mobile Version */}
            <MotionsFade className="h-[100dvh]  sm:hidden">
                <div
                    ref={containerRef}
                    className="max-w-[1440px] sm:hidden p-4 flex items-center justify-center w-full h-[100vh]"
                >
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:hidden text-white relative w-[1360px] h-[537px] items-center justify-center gap-14"
                    >
                        <motion.div
                            id="download_mobile"
                            variants={itemVariants}
                            className="flex relative w-full justify-center items-center"
                        >
                            <Lottie
                                animationData={StickMan}
                                loop={true}
                                autoplay={true}
                                className="w-[35vh] h-auto object-contain"
                            />

                            <motion.div
                                variants={itemVariants}
                                className="w-[78px] absolute bottom-4 left-0 h-[100px]"
                            >
                                <img src={Football} alt="football-icon" />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="w-[78px] absolute -bottom-[20px] right-0 h-[100px]"
                            >
                                <img src={Glasses} alt="glasses-icon" />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="w-[78px] absolute -top-[12vh] left-0 h-[100px]"
                        >
                            <img src={Cup} alt="stadion-icon" />
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="w-[78px] absolute -top-24 right-0 h-[100px]"
                        >
                            <img src={Stadion} alt="football-icon" />
                        </motion.div>

                        <motion.section
                            variants={itemVariants}
                            className="flex flex-col justify-center items-center gap-4"
                        >
                            <div className="flex flex-col justify-center items-center gap-4">
                                <h2 className="text-[40px] text-[#F6F6F6] font-hubot font-bold leading-[1.25]">
                                    Dawaj do gry!
                                </h2>
                                <span className="font-medium text-[#F6F6F6] font-hubot text-[20px] leading-[1.25]">
                                    Pobierz aplikację:
                                </span>
                            </div>

                            <div className="w-full items-center mt-[1vh] justify-center">
                                <figure className="w-[43%] m-auto flex items-center justify-center gap-4 sm:max-w-[250px] md:max-w-[200px] h-auto">
                                    <img
                                        onClick={() =>
                                            window.open(
                                                "https://apps.apple.com/us/app/foova-fc/id6748235923",
                                                "_blank"
                                            )
                                        }
                                        src={DownloadApple}
                                        alt="Foova FC Google Play"
                                        className="w-full hover:cursor-pointer h-auto object-contain"
                                    />
                                    <img
                                        onClick={() =>
                                            window.open(
                                                "https://play.google.com/store/apps/details?id=org.foova",
                                                "_blank"
                                            )
                                        }
                                        src={DownloadPlay}
                                        alt="Foova FC Apple Store"
                                        className="w-full hover:cursor-pointer h-auto object-contain"
                                    />
                                </figure>
                            </div>
                        </motion.section>
                    </motion.section>
                </div>
            </MotionsFade>

            {/* Desktop Version */}
            <MotionsFade className=" md:hidden lg:block relative lg:h-[100vh] hidden">
                <div className="sm:h-[100vh] relative overflow-y-auto sm:max-w-[1440px] sm:w-full hidden sm:block">
                    <div
                        delay={0.2}
                        id="download_desktop"
                        ref={ref}
                        aria-labelledby="download-heading"
                        className="sm:min-h-[100vh] w-full flex font-hubot justify-center items-center bg-black overflow-hidden py-20"
                    >
                        <motion.article
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "exit"}
                            className="relative flex h-full w-full flex-col items-center justify-center gap-5 px-4 text-center"
                        >
                            <motion.figure
                                variants={itemVariants}
                                className="sm:max-w-[30px] md:max-w-[30px] lg:max-w-80 w-full h-auto"
                            >
                                <Lottie
                                    animationData={StickMan}
                                    loop={true}
                                    autoplay={true}
                                    className="w-full h-auto object-contain"
                                />
                            </motion.figure>

                            <motion.h2
                                variants={itemVariants}
                                className="mt-10 sm:text-5xl md:text-[64px] font-hubot font-bold text-white leading-[125%]"
                                id="download-heading"
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
                                className="w-[45%] flex items-center justify-center gap-4 sm:max-w-[250px] md:max-w-[200px] h-auto"
                            >
                                <img
                                    onClick={() =>
                                        window.open(
                                            "https://apps.apple.com/us/app/foova-fc/id6748235923",
                                            "_blank"
                                        )
                                    }
                                    src={DownloadApple}
                                    alt="Foova FC Google Play"
                                    className="w-full hover:cursor-pointer h-auto object-contain"
                                />
                                <img
                                    onClick={() =>
                                        window.open(
                                            "https://play.google.com/store/apps/details?id=org.foova",
                                            "_blank"
                                        )
                                    }
                                    src={DownloadPlay}
                                    alt="Foova FC Apple Store"
                                    className="w-full hover:cursor-pointer h-auto object-contain"
                                />
                            </motion.figure>

                            {/* Decorative icons */}
                            <motion.img
                                variants={itemVariants}
                                className="absolute -top-14 left-2 w-[20%] h-auto object-contain sm:top-8 sm:left-8 sm:w-16 md:-top-16 md:left-56 md:w-32"
                                src={Stadion}
                                alt=""
                                aria-hidden="true"
                            />
                            <motion.img
                                variants={itemVariants}
                                className="absolute bottom-30 left-2 w-[20%] h-auto object-contain sm:bottom-8 sm:left-8 sm:w-16 md:bottom-32 md:left-12 md:w-32"
                                src={Football}
                                alt=""
                                aria-hidden="true"
                            />

                            <motion.img
                                variants={itemVariants}
                                className="absolute -top-16 right-2 w-[20%] h-auto object-contain sm:top-8 sm:right-8 sm:w-20 md:-top-0 md:right-56 md:w-32"
                                src={Cup}
                                alt=""
                                aria-hidden="true"
                            />

                            <motion.img
                                variants={itemVariants}
                                className="absolute top-200 right-4 w-[20%] h-auto object-contain sm:top-50 sm:right-8 sm:w-16 md:top-[20.25rem] md:right-14 md:w-32"
                                src={Glasses}
                                alt=""
                                aria-hidden="true"
                            />
                        </motion.article>
                    </div>
                </div>
            </MotionsFade>

            {/* tablet */}
            <MotionsFade className="md:h-[100dvh] hidden md:block lg:hidden">
                <div
                    ref={tabletContainer}
                    className="md:max-w-[900px]  md:h-[100vh] hidden sm:hidden md:flex lg:hidden p-4 items-center justify-center w-full"
                >
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className=" flex-col hidden sm:hidden md:flex lg:hidden text-white relative w-[700px] h-[537px] items-center justify-center gap-14"
                    >
                        <motion.div
                            id="#download_desktop"
                            variants={itemVariants}
                            className="flex relative w-full justify-center items-center"
                        >
                            <Lottie
                                animationData={StickMan}
                                loop={true}
                                autoplay={true}
                                className="w-[43vw] h-auto object-contain"
                            />

                            <motion.div
                                variants={itemVariants}
                                className="w-[18%] h-[18%] absolute bottom-4 left-0 "
                            >
                                <img src={Football} alt="football-icon" />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="w-[18%] h-[18%] absolute -bottom-[20px] right-0 "
                            >
                                <img src={Glasses} alt="glasses-icon" />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="w-[18%] h-[18%] absolute -top-[12vh] left-0 "
                        >
                            <img src={Cup} alt="stadion-icon" />
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="w-[18%] h-[18%] absolute -top-24 right-0 "
                        >
                            <img src={Stadion} alt="football-icon" />
                        </motion.div>

                        <motion.section
                            variants={itemVariants}
                            className="flex flex-col justify-center items-center gap-4"
                        >
                            <div className="flex flex-col justify-center items-center gap-4">
                                <h2 className="text-[40px] text-[#F6F6F6] font-hubot font-bold leading-[1.25]">
                                    Dawaj do gry!
                                </h2>
                                <span className="font-medium text-[#F6F6F6] font-hubot text-[20px] leading-[1.25]">
                                    Pobierz aplikację:
                                </span>
                            </div>

                            <div className="w-full items-center mt-[1vh] justify-center">
                                <figure className="w-[80%] h-auto m-auto flex items-center justify-center gap-4 sm:max-w-[250px] md:max-w-[300px] ">
                                    <img
                                        onClick={() =>
                                            window.open(
                                                "https://apps.apple.com/us/app/foova-fc/id6748235923",
                                                "_blank"
                                            )
                                        }
                                        src={DownloadApple}
                                        alt="Foova FC Google Play"
                                        className="w-full hover:cursor-pointer h-auto object-contain"
                                    />
                                    <img
                                        onClick={() =>
                                            window.open(
                                                "https://play.google.com/store/apps/details?id=org.foova",
                                                "_blank"
                                            )
                                        }
                                        src={DownloadPlay}
                                        alt="Foova FC Apple Store"
                                        className="w-full hover:cursor-pointer h-auto object-contain"
                                    />
                                </figure>
                            </div>
                        </motion.section>
                    </motion.section>
                </div>
            </MotionsFade>
        </>
    );
}
