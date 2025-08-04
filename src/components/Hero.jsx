import { useEffect, useRef } from "react";
import HeroVector from "../assets/bg-vector.svg";
import appicon from "../assets/App-Icon.svg";
import MotionsFade from "../common/Motions";
import Navbar from "./Navbar";
import "../styles/hero.module.css";
import Lottie from "lottie-react";
import jersey from "../assets/animation/lp-jersey.json";
import TextAnimate from "../common/TextAnimate";

export default function Hero({ onScroll }) {
    const bgRef = useRef(null);

    // Fix for mobile viewport height inconsistency
    useEffect(() => {
        const setVH = () => {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        };
        setVH();
        window.addEventListener("resize", setVH);
        return () => window.removeEventListener("resize", setVH);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
        };

        const onScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <div className="bg-black md:hidden lg:block   w-full max-w-[1440px] m-auto px-3  font-hubot overflow-hidden min-h-screen relative">
                <Navbar onScroll={onScroll} />
                <div
                    className="relative w-full  max-w-[1400px] flex flex-col px-2 sm:px-0 pt-6 pb-32"
                    style={{ minHeight: "calc(var(--vh, 1vh) * 100 - 88px)" }}
                >
                    {/* Background Vector */}
                    <div
                        ref={bgRef}
                        className="absolute top-3 left-0 right-0 h-[70vh] bg-no-repeat bg-contain bg-top transition-transform duration-75 ease-out will-change-transform pointer-events-none"
                        style={{ backgroundImage: `url(${HeroVector})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100" />

                    {/* Foreground Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white p-4 sm:p-6 flex-grow">
                        <MotionsFade delay={0.3}>
                            <div className="flex flex-col gap-4 justify-center items-center mt-6 sm:mt-0">
                                <Lottie
                                    animationData={jersey}
                                    loop={true}
                                    className="w-[35vw] max-w-xs sm:w-[10vw] transition-opacity duration-500 ease-in-out"
                                    autoplay={true}
                                />
                                <span className="text-base sm:text-xl text-center opacity-80">
                                    Nie ma farta. Jest tylko wiedza!
                                </span>
                            </div>
                        </MotionsFade>

                        <MotionsFade delay={0.4}>
                            <h1 className="text-3xl sm:text-[64px] lg:text-[60px] font-bold leading-[1.5] text-center mt-4">
                                <TextAnimate>
                                    <p>Udowodnij, że wiesz więcej </p>
                                    <p>niż reszta i zgarnij nagrody!</p>
                                </TextAnimate>
                            </h1>
                        </MotionsFade>
                    </div>

                    {/* CTA */}
                    <div className="absolute bg-black bottom-[3.4vh] safari:bottom-6 left-0 w-full px-4">
                        <div
                            onClick={onScroll}
                            className="bg-[#232323] cursor-pointer w-full sm:w-fit mx-auto flex items-center gap-3 sm:gap-4 h-[60px] max-h-[64px] min-h-[48px] px-1 sm:px-1 shadow-lg"
                        >
                            <img
                                src={appicon}
                                alt="app icon"
                                className="h-full p-2 aspect-square w-auto flex-shrink-0 object-contain"
                            />
                            <span className="text-white text-[3.5vw] sm:text-sm md:text-base font-hubot text-left pr-2 leading-tight break-words w-full">
                                Pobierz apkę FOOVA FC i pokaż kto tu rządzi.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* tablet */}
            <div className="bg-black  sm:hidden hidden lg:hidden md:block   md:w-full md:max-w-[1140px] m-auto px-3  font-hubot  h-screen relative">
                <Navbar onScroll={onScroll} />
                <div className="relative w-full  max-w-[1400px] flex flex-col px-2 sm:px-0 pt-6 pb-32">
                    {/* Background Vector */}
                    <div
                        ref={bgRef}
                        className="absolute top-3 left-0 right-0 h-[70vh] bg-no-repeat bg-contain bg-top transition-transform duration-75 ease-out will-change-transform pointer-events-none"
                        style={{ backgroundImage: `url(${HeroVector})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100" />

                    {/* Foreground Content */}
                    <div className="relative z-10 flex mt-10 flex-col items-center justify-center text-white p-4 sm:p-6 flex-grow">
                        <MotionsFade delay={0.3}>
                            <div className="flex flex-col gap-4 justify-start items-center sm:mt-0">
                                <Lottie
                                    animationData={jersey}
                                    loop={true}
                                    className="md:w-[15vh] max-w-xs transition-opacity duration-500 ease-in-out"
                                    autoplay={true}
                                />
                                <span className=" md:text-[2.4vw] text-center opacity-80">
                                    Nie ma farta. Jest tylko wiedza!
                                </span>
                            </div>
                        </MotionsFade>

                        <MotionsFade delay={0.4}>
                            <h1 className=" md:text-[7vw] font-bold leading-[1.5] text-center mt-4">
                                <TextAnimate>
                                    <p>Udowodnij, że wiesz więcej </p>
                                    <p>niż reszta i zgarnij nagrody!</p>
                                </TextAnimate>
                            </h1>
                        </MotionsFade>
                    </div>
                </div>

                {/* CTA */}
                <div className="absolute h-full md:max-h-[10vw]  bg-black md:bottom-4 md:translate-y-[-100%] left-0 w-full px-4">
                    <div
                        onClick={onScroll}
                        className="bg-[#232323] cursor-pointer w-full md:w-fit mx-auto flex items-center gap-3 sm:gap-4 h-full px-1 sm:px-1 shadow-lg"
                    >
                        <img
                            src={appicon}
                            alt="app icon"
                            className="h-full p-2 aspect-square w-auto flex-shrink-0 object-contain"
                        />
                        <span className="md:text-white md:text-[2.5vw]  md:font-hubot md:text-left md:pr-2 md:leading-tight md:break-words md:w-full">
                            Pobierz apkę FOOVA FC i pokaż kto tu rządzi.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
