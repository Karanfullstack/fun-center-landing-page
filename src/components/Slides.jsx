import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import Container from "./Container";
import arrow from "../assets/chevron-left.svg";
import Card from "./Card";

import screen1 from "../assets/Screenshot-2.webp";
import screen2 from "../assets/Screenshot-1.webp";
import screen3 from "../assets/Screenshot-5.webp";
import screen4 from "../assets/Screenshot-6.webp";
import screen5 from "../assets/Screenshot-7.webp";
import screen6 from "../assets/Screenshot-3.webp";

const data = [
    { img: screen1, text: "Zbieraj punkty w predykcjach przed i w trakcie meczu!" },
    { img: screen2, text: "Stwórz swój profil i udowodnij, że jesteś piłkarskim Ekspertem!" },
    { img: screen3, text: "Zapraszaj ziomków i pokaż im kto tu rządzi!" },
    { img: screen4, text: "Walcz o zwycięstwo w rankingu ogólnym, klubowym i prywatnym!" },
    { img: screen5, text: "Buduj historię Twoich wyników i osiągnięć!" },
    { img: screen6, text: "Bądź na bieżąco z ciekawostkami i wynikami!" },
];

export default function Slides() {
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { amount: 0.1, once: true });

    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    // Fix viewport height
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        setVh();
        window.addEventListener("resize", setVh);
        return () => window.removeEventListener("resize", setVh);
    }, []);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    // Set initial slide to 0 (left-aligned)
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(0, 0);
            setActiveIndex(0);
            setIsBeginning(true);
            setIsEnd(swiperRef.current.isEnd);
        }
    }, []);

    return (
        <div
            className="w-full items-center  font-hubot snap-start  font-[800] px-5 bg-black pt-4 pb-[env(safe-area-inset-bottom)] flex flex-col"
            style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        >
            <div className="w-full m-auto ">
                <div className="flex flex-col h-full">
                    {/* Header with arrows */}
                    <div className="h-[48px] flex gap-2 justify-between items-center -mt-10 px-4 sm:px-8">
                        <span className="text-white text-sm sm:text-base lg:text-md font-normal">
                            Predykcje, ciekawostki i Wy, Eksperci:
                        </span>

                        {/* Arrows */}
                        <div className="w-[80px] sm:w-[92px] flex gap-1 items-center justify-between h-[40px] sm:h-[48px]  shadow-sm bg-[#121212]">
                            <button
                                onClick={handlePrev}
                                className={`w-1/2 flex items-center justify-center h-full transition-all duration-200 ease-in-out ${
                                    isBeginning
                                        ? "bg-[#232323] opacity-40 cursor-not-allowed"
                                        : "bg-[#DBFD01] cursor-pointer hover:bg-[#c7ea00]"
                                }`}
                                aria-label="Previous slide"
                                disabled={isBeginning}
                            >
                                <img src={arrow} alt="left arrow" className="w-4 h-4" />
                            </button>
                            <button
                                onClick={handleNext}
                                className={`w-1/2 flex items-center justify-center h-full transition-all duration-200 ease-in-out ${
                                    isEnd
                                        ? "bg-[#232323] opacity-40 cursor-not-allowed"
                                        : "bg-[#DBFD01] cursor-pointer hover:bg-[#c7ea00]"
                                }`}
                                aria-label="Next slide"
                                disabled={isEnd}
                            >
                                <img src={arrow} alt="right arrow" className="w-4 h-4 rotate-180" />
                            </button>
                        </div>
                    </div>

                    {/* Slide content */}
                    <motion.section
                        ref={sectionRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-grow mt-6 px-2 sm:px-4 flex items-center overflow-visible"
                    >
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            loop={false}
                            speed={400}
                            breakpoints={{
                                0: { slidesPerView: 1.2 },
                                640: { slidesPerView: 1.5 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            style={{ height: "auto" }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            slidesPerView={1.2}
                            initialSlide={0}
                            onSlideChange={handleSlideChange}
                        >
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        style={{
                                            transition:
                                                "transform 300ms ease-out, opacity 300ms ease-out",
                                            willChange: "transform, opacity",
                                        }}
                                        className="z-10"
                                    >
                                        <Card index={index} data={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.section>
                </div>
            </div>
        </div>
    );
}
