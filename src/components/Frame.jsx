import { useEffect, useRef } from "react";
import groupFootbal from "../assets/Group.svg";
import MotionsFade from "../common/Motions";

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

    // Scroll reset helper
    const resetScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: "auto" });
        }
    };

    // Scroll reset on mount
    useEffect(() => {
        resetScroll();
    }, []);

    // Intersection Observer to reset scroll when section enters viewport
    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        resetScroll();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <MotionsFade>
            <div
                ref={sectionRef}
                className="bg-black snap-start justify-center font-hubot flex flex-col items-center sm:h-[100vh] h-[100vh] relative"
                style={{ scrollBehavior: "auto" }}
            >
                <Container>
                    <div
                        ref={scrollRef}
                        className="w-full h-[70vh] overflow-y-auto scroll-smooth flex justify-center items-center"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        <div className="flex flex-col-reverse gap-8 justify-center items-center min-h-[115vh] w-full max-w-[1100px] relative">
                            <div
                                className="w-full sticky top-[40vh] h-[60px] flex justify-center items-center will-change-top"
                                style={{ transform: "translateZ(0)" }}
                            >
                                <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center leading-tight">
                                    Apka dla futbolowych Ekspertów.
                                </span>
                            </div>

                            <div
                                className="w-[95%] z-40 sticky top-[24vh] max-w-full sm:w-[510px] sm:max-w-none text-center py-4 bg-[#DBFD01] will-change-top"
                                style={{ transform: "translateZ(0)" }}
                            >
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “To było oczywiste!”
                                </span>
                            </div>
                            <div
                                delay={0.3}
                                className="w-[85%] sticky top-[20vh] z-30 max-w-full sm:w-[445px] sm:max-w-none text-center py-4 bg-white will-change-top"
                                style={{ transform: "translateZ(0)" }}
                            >
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “A nie mówiłem?”
                                </span>
                            </div>
                            <div
                                className="w-[75%] sticky top-[16vh] max-w-full sm:w-[365px] sm:max-w-none text-center py-4 bg-[#DBFD01] will-change-top"
                                style={{ transform: "translateZ(0)" }}
                            >
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “Wiedziałem!”
                                </span>
                            </div>

                            <div
                                className="bg-white sticky top-[10px] rounded-full w-[80px] h-[80px] flex items-center justify-center overflow-hidden will-change-top"
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
                </Container>
            </div>
        </MotionsFade>
    );
}
