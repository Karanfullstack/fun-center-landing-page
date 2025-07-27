import { useEffect, useRef, useState } from "react";
import groupFootbal from "../assets/Group.svg";
import MotionsFade from "../common/Motions";

const Container = ({ children }) => (
    <div className="max-w-[1100px] mx-auto px-4 pt-0 pb-0 sm:px-6 lg:px-8">{children}</div>
);

export default function App() {
    const scrollRef = useRef(null);
    const middleCardRef = useRef(null);

    const [loaded, setLoaded] = useState(false);

    // Set --vh CSS var for mobile viewport height fix
    useEffect(() => {
        function setVh() {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        }
        setVh();
        window.addEventListener("resize", setVh);
        return () => window.removeEventListener("resize", setVh);
    }, []);

    // Center the "A nie mówiłem?" card on load
    useEffect(() => {
        const container = scrollRef.current;
        const middleCard = middleCardRef.current;
        if (container && middleCard) {
            const containerHeight = container.clientHeight;
            const cardOffset = middleCard.offsetTop;
            const cardHeight = middleCard.clientHeight;

            const scrollTop = cardOffset - containerHeight / 2 + cardHeight / 2;
            container.scrollTo({ top: scrollTop, behavior: "smooth" });

            // Trigger fade-in after scrolling starts
            setTimeout(() => setLoaded(true), 300);
        }
    }, []);

    // Common fade & slide styles for cards
    const fadeSlideStyles = (delay = 0) => ({
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    });

    return (
        <MotionsFade>
            <div
                className="bg-black scroll-smooth justify-center max-w-[1440px] m-auto font-hubot flex flex-col items-center sm:h-[100vh] h-[100vh] relative"
                style={{ scrollBehavior: "auto" }}
            >
                <div
                    ref={scrollRef}
                    className="w-full m-auto h-[75vh] scrollbar-hide overflow-y-auto scroll-smooth flex justify-center items-center"
                    style={{ scrollBehavior: "smooth" }}
                >
                    <div className="flex flex-col-reverse gap-8 justify-center items-center min-h-[125vh] w-full relative">
                        <div
                            className="w-full sticky top-[40vh] scroll-smooth h-[60px] flex justify-center items-center will-change-top"
                            style={{ transform: "translateZ(0)", ...fadeSlideStyles(0) }}
                        >
                            <span className="text-[32px] sm:text-2xl md:text-5xl lg:text-5xl text-white font-bold text-center leading-[1.25]">
                                Apka dla futbolowych Ekspertów.
                            </span>
                        </div>

                        <div
                            className="w-[95%] scroll-smooth z-40 sticky !top-[24vh] max-w-full sm:w-[510px] sm:max-w-none text-center py-4 bg-[#DBFD01] will-change-top"
                            style={{ transform: "translateZ(0)", ...fadeSlideStyles(0.2) }}
                        >
                            <span className="text-2xl sm:text-3xl leading-[1.25] md:text-4xl lg:text-5xl font-bold">
                                “To było oczywiste!”
                            </span>
                        </div>

                        <div
                            ref={middleCardRef}
                            className="w-[85%] scroll-smooth sticky top-[21.1vh] z-30 max-w-full sm:w-[445px] sm:max-w-none text-center py-4 bg-white will-change-top"
                            style={{ transform: "translateZ(0)", ...fadeSlideStyles(0.4) }}
                        >
                            <span className="text-2xl leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “A nie mówiłem?”
                            </span>
                        </div>

                        <div
                            className="w-[75%] scroll-smooth sticky top-[18.5vh] max-w-full sm:w-[365px] sm:max-w-none text-center py-4 bg-[#DBFD01] will-change-top"
                            style={{ transform: "translateZ(0)", ...fadeSlideStyles(0.6) }}
                        >
                            <span className="text-2xl leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “Wiedziałem!”
                            </span>
                        </div>

                        <div
                            className="bg-white scroll-smooth sticky top-[1.7rem] rounded-full w-[80px] h-[80px] flex items-end justify-center overflow-hidden will-change-top"
                            style={{ transform: "translateZ(0)", ...fadeSlideStyles(0.8) }}
                        >
                            <img
                                src={groupFootbal}
                                alt="football"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MotionsFade>
    );
}
