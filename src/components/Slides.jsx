import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import Container from "./Container";
import arrow from "../assets/chevron-left.svg";
import Card from "./Card";

import screen1 from "../assets/Screenshot-2.svg";
import screen2 from "../assets/Screenshot-1.svg";
import screen3 from "../assets/Screenshot-5.svg";
import screen4 from "../assets/Screenshot-6.svg";
import screen5 from "../assets/Screenshot-7.svg";
import screen6 from "../assets/Screenshot-3.svg";

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

    const defaultIndex = Math.floor(data.length / 2);
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(defaultIndex, 0);
            setActiveIndex(defaultIndex);
        }
    }, []);

    return (
        <div className="w-full font-hubot snap-start font-[800] px-5 bg-black pt-4 h-screen flex flex-col">
            <Container size="1250px" className="flex flex-col h-full">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="h-[48px] flex gap-2 justify-between items-center pt-4 px-4 sm:px-8">
                        <span className="text-white text-md font-normal">
                            Predykcje, ciekawostki i Wy, Eksperci:
                        </span>

                        {/* Arrows */}
                        <div className="w-[92px] flex gap-1 items-center justify-between h-[48px] rounded-md shadow-sm bg-[#121212]">
                            <button
                                onClick={handlePrev}
                                className={`w-1/2 flex items-center justify-center h-full transition-colors ${
                                    activeIndex === 0
                                        ? "bg-[#232323] cursor-not-allowed"
                                        : "bg-[#DBFD01] cursor-pointer"
                                }`}
                            >
                                <img src={arrow} alt="leftArrow" />
                            </button>
                            <button
                                onClick={handleNext}
                                className={`w-1/2 flex items-center justify-center h-full transition-colors ${
                                    activeIndex >= data.length - 1
                                        ? "bg-[#232323] cursor-not-allowed"
                                        : "bg-[#DBFD01] cursor-pointer"
                                }`}
                            >
                                <img className="rotate-180" src={arrow} alt="rightArrow" />
                            </button>
                        </div>
                    </div>

                    {/* Animate section on scroll into view */}
                    <motion.section
                        ref={sectionRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-grow mt-10 px-4 flex items-center"
                    >
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={isMobile ? 1.2 : 3}
                            centeredSlides={true}
                            loop={false}
                            speed={500}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            initialSlide={defaultIndex}
                            onSlideChange={handleSlideChange}
                        >
                            {data.map((item, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            style={{
                                                transform: `scale(${isActive ? 1.05 : 0.95})`,
                                                opacity: isActive ? 1 : 0.6,
                                                transition:
                                                    "transform 300ms ease-out, opacity 300ms ease-out",
                                                willChange: "transform, opacity",
                                            }}
                                            className="z-10"
                                        >
                                            <Card index={index} data={item} />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </motion.section>
                </div>
            </Container>
        </div>
    );
}
