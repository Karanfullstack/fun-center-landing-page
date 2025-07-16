import { useEffect, useRef } from "react";
import Container from "./Container";
import HeroVector from "../assets/bg-vector.svg";
import tshirt from "../assets/jersey_home.svg";
import appicon from "../assets/App-Icon.svg";
import MotionsFade from "../common/Motions";

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
        <div className="bg-black font-hubot overflow-hidden">
            <Container>
                <div
                    className="
                        relative 
                        h-[80vh] 
                        flex flex-col justify-center items-center w-full
                        px-4      /* add horizontal padding on mobile */
                        sm:px-0   /* remove padding on larger */
                    "
                >
                    {/* paralllax background */}
                    <div
                        ref={bgRef}
                        className="absolute inset-0 bg-no-repeat bg-contain bg-top transition-transform duration-75 ease-out will-change-transform"
                        style={{ backgroundImage: `url(${HeroVector})` }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75" />
                    {/* Foreground Content */}
                    <div
                        className="
                            relative 
                            justify-center space-y-5 items-center z-10 text-white 
                            p-4      /* reduce padding on mobile */
                            sm:p-6   /* original padding on larger screens */
                            mt-0     /* remove negative margins on mobile */
                            sm:-mt-6
                            "
                    >
                        <MotionsFade delay={0.2}>
                            <div className="flex flex-col gap-4 justify-center items-center -mt-0 sm:-mt-4">
                                <img
                                    src={tshirt}
                                    alt="jersey"
                                    className="w-[60vw] max-w-xs sm:w-auto"
                                    /* smaller width on mobile, original size on desktop */
                                />
                                <span className="text-base sm:text-xl text-center">
                                    Nie ma farta. Jest tylko wiedza!
                                </span>
                            </div>
                        </MotionsFade>
                        <MotionsFade delay={0.4}>
                            <h1
                                className="
                                    text-3xl sm:text-[65px] font-bold leading-tight text-center
                                    /* smaller heading on mobile */
                                "
                            >
                                Udowodnij, że wiesz więcej
                                <br />
                                niż reszta i zgarnij nagrody!
                            </h1>
                        </MotionsFade>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#232323] px-3 sm:px-4 py-2 w-[95vw] sm:w-fit flex items-center gap-2 h-[12vw] sm:h-[64px] max-h-[64px] overflow-hidden whitespace-nowrap">
                        <img
                            src={appicon}
                            alt="appicon"
                            className="h-[6vw] w-[6vw] sm:h-[40px] sm:w-[40px] min-w-[24px]"
                        />
                        <span className="text-white text-[3.5vw] sm:text-[1rem] font-hubot leading-tight truncate">
                            Pobierz apkę FOOVA FC i pokaż kto tu rządzi.
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
}
