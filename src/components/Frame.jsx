import { useEffect, useRef } from "react";
import groupFootbal from "../assets/Group.svg";
import MotionsFade from "../common/Motions";

export default function App() {
    const scrollRef = useRef(null);
    const sectionRef = useRef(null);

    // vh CSS var for mobile viewport height fix
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
        <>
            <MotionsFade className="md:hidden lg:block">
                <div className="h-[20vh]"></div>
                <div
                    ref={sectionRef}
                    className="bg-black max-w-[1440px] m-auto   justify-center font-hubot flex flex-col items-center sm:h-[100vh] h-[calc(80vh)] relative"
                    style={{ scrollBehavior: "auto" }}
                >
                    <div
                        ref={scrollRef}
                        className="w-full    m-auto mb-48  flex justify-start items-start"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        <div className="flex flex-col p-2 m-auto sm:translate-y-[-23.6vh] translate-y-[-24%]    gap-4  justify-end items-center h-full w-full max-w-[1100px] relative">
                            <div
                                className="w-[75%] flex flex-col justify-center items-center   sticky bottom-[10vh] max-w-full sm:w-[365px] sm:max-w-none text-center py-4 bg-[#DBFD01] will-change-top"
                                style={{ transform: "translateY(-4.6vh)" }}
                            >
                                <span className="text-2xl sm:w-[365px] sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “Wiedziałem!”
                                </span>

                                <div
                                    className="bg-white absolute top-[5vh] rounded-full w-[80px] h-[80px] flex items-center justify-center overflow-hidden will-change-top"
                                    style={{ transform: "translateY(-20vh)" }}
                                >
                                    <img
                                        src={groupFootbal}
                                        alt="football"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div
                                delay={0.3}
                                className="w-[85%] sticky bottom-[9.4vh] z-30 max-w-full sm:w-[445px] sm:max-w-none text-center py-4 bg-white will-change-top"
                                style={{ transform: "translateY(-2.4vh)" }}
                            >
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “A nie mówiłem?”
                                </span>
                            </div>

                            <div
                                className="w-full flex flex-col justify-center items-center z-40 sticky bottom-[9vh] max-w-full sm:w-[510px] sm:max-w-none text-center py-4 bg-[#DBFD01] will-change-top"
                                style={{ transform: "translateY(0)" }}
                            >
                                <span className="text-2xl sm:w-[510px]  sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “To było oczywiste!”
                                </span>

                                <div
                                    className="w-full m-auto sm:w-[900px] mx-auto absolute -bottom-[10vh] h-[60px] flex justify-center items-center will-change-top"
                                    style={{ transform: "translateY(4vh)" }}
                                >
                                    <span className="text-3xl  sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center leading-tight">
                                        Apka dla futbolowych Ekspertów.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionsFade>

            {/* tablet */}

            <MotionsFade className="md:block h-screen lg:hidden hidden">
                <div className="h-[10vh]"></div>
                <div
                    ref={sectionRef}
                    className="bg-black md:w-full md:max-w-[1440px] md:m-auto h-full   md:justify-center font-hubot md:flex md:flex-col md:items-center  md:relative"
                    style={{ scrollBehavior: "auto" }}
                >
                    <div
                        ref={scrollRef}
                        className="md:w-full    md:m-auto md:mb-48   md:flex md:justify-start md:items-start"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        <div className="md:flex md:flex-col md:p-2 m-auto md:translate-y-[-23.6vh]  md:gap-4  md:justify-end md:items-center md:h-full md:w-full md:max-w-[1100px] md:relative">
                            <div
                                className="flex flex-col justify-center items-center   sticky md:bottom-[10vh] max-w-[55vw] w-full  text-center py-[2.3vh] bg-[#DBFD01] will-change-top"
                                style={{ transform: "translateY(-4.6vh)" }}
                            >
                                <span className=" md:w-[55vw] md:text-4xl  md:font-bold">
                                    “Wiedziałem!”
                                </span>

                                <div
                                    className="bg-white absolute md:top-[6vh] md:rounded-full md:w-[clamp(10vh,13vh,9vh)]  md:flex md:items-center justify-center md:overflow-hidden md:will-change-top"
                                    style={{ transform: "translateY(-20vh)" }}
                                >
                                    <img
                                        src={groupFootbal}
                                        alt="football"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div
                                delay={0.3}
                                className="md:w-[66vw] sticky bottom-[9.4vh] z-30 max-w-full  sm:max-w-none text-center py-[2.3vh] bg-white will-change-top"
                                style={{ transform: "translateY(-2.4vh)" }}
                            >
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “A nie mówiłem?”
                                </span>
                            </div>

                            <div
                                className="w-full flex flex-col justify-center items-center z-40 sticky bottom-[9vh] max-w-full md:w-[75vw] sm:max-w-none text-center py-[2.3vh] bg-[#DBFD01] will-change-top"
                                style={{ transform: "translateY(0)" }}
                            >
                                <span className=" font-h   md:text-4xl lg:text-5xl font-bold">
                                    “To było oczywiste!”
                                </span>

                                <div
                                    className="w-full m-auto sm:w-[900px] mx-auto absolute -bottom-[10vh] h-[60px] flex justify-center items-center will-change-top"
                                    style={{ transform: "translateY(4vh)" }}
                                >
                                    <span className="text-3xl  sm:text-2xl md:text-[4.5vw] lg:text-5xl text-white font-bold text-center leading-tight">
                                        Apka dla futbolowych Ekspertów.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionsFade>
        </>
    );
}
