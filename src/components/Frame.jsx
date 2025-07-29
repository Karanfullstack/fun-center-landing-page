import { useEffect, useRef, useMemo } from "react";
import groupFootbal from "../assets/Group.svg";
import MotionsFade from "../common/Motions";
import Lenis from "lenis";

const Container = ({ children }) => (
    <div className="max-w-[1100px] mx-auto px-4 pt-0 pb-0 sm:px-6 lg:px-8">{children}</div>
);

export default function App() {
    const scrollRef = useRef(null);
    const sectionRef = useRef(null);

    // Set --vh CSS var for mobile viewport height fix
    useEffect(() => {
        function setVh() {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        }
        setVh();
        window.addEventListener("resize", setVh);
        return () => window.removeEventListener("resize", setVh);
    }, []);

    // Scroll reset only once on first mount
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop = -202;
            }
        }, 10); // Slight delay to ensure rendering before scroll reset

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const wrapper = scrollRef.current;

        if (!wrapper) return;

        // Optional: if your scrollable content is a child inside
        const content = wrapper.firstElementChild;

        const lenis = new Lenis({
            wrapper,
            content,
            duration: 1.2,
            easing: (t) => t,
            smoothWheel: false,
            smoothTouch: true,
            touchMultiplier: 1.5,
            scrollFromAnywhere: true,
            direction: "vertical",
            gestureDirection: "vertical",
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    return (
        <MotionsFade>
            <div
                ref={sectionRef}
                className="bg-black  justify-start max-w-[1400px] m-auto font-hubot flex flex-col items-start sm:h-[89vh] h-[100vh] relative"
            >
                <div
                    ref={scrollRef}
                    className="w-full m-auto h-[70vh] flex-col-reverse scrollbar-hide overflow-y-auto scroll-auto flex justify-center items-center"
                >
                    <div
                        className="flex flex-col-reverse gap-9 justify-center items-center min-h-[120vh] w-full relative"
                        style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "auto" }}
                    >
                        <div
                            className="w-full sticky bottom-0 h-[60px] flex justify-center items-center will-change-top"
                            style={{ transform: "translateZ(0)" }}
                        >
                            <span className="text-3xl sm:text-[48px] md:text-5xl lg:text-5xl text-white font-bold text-center leading-[1.25]">
                                Apka dla futbolowych Ekspertów.
                            </span>
                        </div>

                        <div
                            className="w-[95%] z-40 sticky bottom-[15vh] max-w-full sm:w-[510px] sm:max-w-none text-center py-4 bg-[#DBFD01] will-change-top"
                            style={{ transform: "translateZ(0)" }}
                        >
                            <span className="text-2xl sm:text-3xl leading-[1.25] md:text-4xl lg:text-5xl font-bold">
                                “To było oczywiste!”
                            </span>
                        </div>

                        <div
                            className="w-[85%] sticky bottom-[17.6vh] z-30 max-w-full sm:w-[445px] sm:max-w-none text-center py-4 bg-white will-change-top"
                            style={{ transform: "translateZ(0)" }}
                        >
                            <span className="text-2xl leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “A nie mówiłem?”
                            </span>
                        </div>

                        <div
                            className="w-[75%] sticky bottom-[21vh] max-w-full sm:w-[365px] sm:max-w-none text-center py-4 bg-[#DBFD01] will-change-top"
                            style={{ transform: "translateY(6px)" }}
                        >
                            <span className="text-2xl leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “Wiedziałem!”
                            </span>
                        </div>

                        <div
                            className="bg-white sticky top-[1vh] rounded-full w-[80px] h-[80px] flex items-end justify-center overflow-hidden will-change-top"
                            style={{ transform: "translateZ(0)" }}
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
