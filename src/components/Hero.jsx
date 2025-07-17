import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import HeroVector from "../assets/bg-vector.svg";
import tshirt from "../assets/jersey_home.svg";
import appicon from "../assets/App-Icon.svg";
import MotionsFade from "../common/Motions";
import Navbar from "./Navbar";

export default function Hero() {
    const bgRef = useRef(null);
    const [isSamsungA33, setIsSamsungA33] = useState(false);
    const [ctaHeight, setCtaHeight] = useState("auto");
    const [ctaBottom, setCtaBottom] = useState("env(safe-area-inset-bottom)");

    useEffect(() => {
        // Detect Samsung Galaxy A33
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const isA33 = /SM-A33/i.test(ua);
        setIsSamsungA33(isA33);

        if (isA33) {
            const screenHeight = window.innerHeight;
            const calculatedHeight = Math.max(64, screenHeight * 0.12);
            setCtaHeight(calculatedHeight + "px");
            setCtaBottom(`calc(env(safe-area-inset-bottom) + 10px)`);
        }

        // Background parallax scroll handler
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
        <div className="bg-black snap-start font-hubot overflow-hidden min-h-screen relative">
            <Navbar />
            <Container>
                <div
                    className="relative flex flex-col min-h-[calc(100vh-88px)] px-4 sm:px-0 pb-[env(safe-area-inset-bottom)]"
                    style={{
                        overflowY: isSamsungA33 ? "auto" : "hidden",
                    }}
                >
                    {/* Background Vector */}
                    <div
                        ref={bgRef}
                        className="absolute top-0 left-0 right-0 h-[80vh] bg-no-repeat bg-contain bg-top transition-transform duration-75 ease-out will-change-transform pointer-events-none"
                        style={{
                            backgroundImage: `url(${HeroVector})`,
                            backgroundPosition: "top center",
                            backgroundSize: "contain",
                        }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 z-[1]" />

                    {/* Foreground Content */}
                    <div
                        className={`relative z-10 flex flex-col items-center justify-center text-white p-4 sm:p-6 space-y-5 ${
                            isSamsungA33 ? "" : "flex-grow"
                        }`}
                        style={
                            isSamsungA33
                                ? {
                                      height: "65vh", // limit height to avoid pushing CTA off screen
                                      maxHeight: "calc(100vh - 120px)", // leaves space for CTA button
                                  }
                                : {}
                        }
                    >
                        <MotionsFade delay={0.2}>
                            <div className="flex flex-col gap-4 justify-center items-center -mt-0 sm:-mt-4">
                                <img
                                    src={tshirt}
                                    alt="jersey"
                                    className="w-[40vw] max-w-xs sm:w-[10vw]"
                                />
                                <span className="text-base sm:text-xl text-center">
                                    Nie ma farta. Jest tylko wiedza!
                                </span>
                            </div>
                        </MotionsFade>

                        <MotionsFade delay={0.4}>
                            <h1 className="text-3xl sm:text-[65px] font-bold leading-tight text-center">
                                Udowodnij, że wiesz więcej
                                <br />
                                niż reszta i zgarnij nagrody!
                            </h1>
                        </MotionsFade>
                    </div>
                </div>
            </Container>

            {/* Bottom CTA Bar – always visible, fixed at bottom */}
            <div
                className="w-full absolute left-0 flex justify-center z-30 px-4 sm:pb-6"
                style={{
                    bottom: ctaBottom,
                    height: ctaHeight,
                    minHeight: "48px",
                    backgroundColor: "transparent",
                }}
            >
                <div
                    className="
            bg-[#232323] 
            px-3 sm:px-4 py-2 
            w-full sm:w-fit 
            flex items-center gap-2 
            overflow-hidden whitespace-nowrap 
            rounded-md
            shadow-lg
          "
                    style={{
                        height: "100%",
                        maxHeight: "64px",
                    }}
                >
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
        </div>
    );
}
