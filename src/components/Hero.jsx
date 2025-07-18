import { useEffect, useRef } from "react";
import Container from "./Container";
import HeroVector from "../assets/bg-vector.svg";
import tshirt from "../assets/jersey_home.svg";
import appicon from "../assets/App-Icon.svg";
import MotionsFade from "../common/Motions";
import Navbar from "./Navbar";

export default function Hero() {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        };

        const onScroll = () => requestAnimationFrame(handleScroll);

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="bg-black  px-3 snap-start font-hubot overflow-hidden min-h-screen relative">
            <Navbar />

            <Container>
                <div className="relative  flex flex-col px-2 sm:px-0 pt-6 sm:min-h-[calc(100vh-88px)] pb-32 min-h-[calc(100vh-150px)]">
                    {/* Background Vector */}
                    <div
                        ref={bgRef}
                        className="absolute top-3 left-0 right-0 h-[75vh] bg-no-repeat bg-contain bg-top transition-transform duration-75  ease-out will-change-transform pointer-events-none"
                        style={{
                            backgroundImage: `url(${HeroVector})`,
                        }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70" />

                    {/* Foreground Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white p-4 sm:p-6 flex-grow">
                        <MotionsFade delay={0.2}>
                            <div className="flex flex-col gap-4 justify-center items-center mt-6 sm:mt-0">
                                <img
                                    src={tshirt}
                                    alt="jersey"
                                    className="w-[30vw] -mt-14 max-w-xs sm:w-[10vw]"
                                />
                                <span className="text-base sm:text-xl text-center">
                                    Nie ma farta. Jest tylko wiedza!
                                </span>
                            </div>
                        </MotionsFade>

                        <MotionsFade delay={0.4}>
                            <h1 className="text-3xl sm:text-[65px]  lg:text-[50px] font-bold leading-tight text-center mt-4">
                                Udowodnij, że wiesz więcej
                                <br />
                                niż reszta i zgarnij nagrody!
                            </h1>
                        </MotionsFade>
                    </div>
                    {/* CTA Button - Fixed at bottom */}
                    <MotionsFade delay={0.4} className="absolute bottom-2 left-0 w-full  px-4 ">
                        <div
                            className="
                    "
                        >
                            <div
                                className="bg-[#232323] 
    w-full sm:w-fit 
    mx-auto 
    flex items-center 
    gap-3 sm:gap-4 
    h-[12vh] max-h-[64px] min-h-[48px] 
    px-1 sm:px-1 
    shadow-lg "
                            >
                                <img
                                    src={appicon}
                                    alt="app icon"
                                    className="h-full p-2 aspect-square w-auto flex-shrink-0 object-contain"
                                />
                                <span
                                    className="text-white 
      text-[3.5vw] sm:text-sm md:text-base 
      font-hubot  text-left pr-2
      leading-tight 
      break-words w-full"
                                >
                                    Pobierz apkę FOOVA FC i pokaż kto tu rządzi.
                                </span>
                            </div>
                        </div>
                    </MotionsFade>
                </div>
            </Container>
        </div>
    );
}
