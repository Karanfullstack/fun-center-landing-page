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

    const defaultIndex = Math.floor(data.length / 2);
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    // Dynamically set CSS variable --vh for correct viewport height on iPhones (fixes 100vh issue)
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
        <div
            className="w-full font-hubot snap-start   font-[800] px-5 bg-black pt-4 pb-[env(safe-area-inset-bottom)] flex flex-col"
            style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        >
            <Container size="1250px" className="flex  flex-col items-start  h-full">
                <div className="  flex flex-col h-full">
                    {/* Header */}
                    <div className="h-[48px]   flex gap-2  justify-between items-center -mt-10  px-4 sm:px-8">
                        <span className="text-white text-sm sm:text-base lg:text-md font-normal">
                            Predykcje, ciekawostki i Wy, Eksperci:
                        </span>

                        {/* Arrows */}
                        <div className="w-[80px] sm:w-[92px] flex gap-1 items-center justify-between h-[40px] sm:h-[48px] rounded-md shadow-sm bg-[#121212]">
                            <button
                                onClick={handlePrev}
                                className={`w-1/2 flex items-center justify-center h-full transition-colors ${
                                    activeIndex === 0
                                        ? "bg-[#232323] cursor-not-allowed"
                                        : "bg-[#DBFD01] cursor-pointer"
                                }`}
                                aria-label="Previous slide"
                                disabled={activeIndex === 0}
                            >
                                <img src={arrow} alt="left arrow" />
                            </button>
                            <button
                                onClick={handleNext}
                                className={`w-1/2 flex items-center justify-center h-full transition-colors ${
                                    activeIndex >= data.length - 1
                                        ? "bg-[#232323] cursor-not-allowed"
                                        : "bg-[#DBFD01] cursor-pointer"
                                }`}
                                aria-label="Next slide"
                                disabled={activeIndex >= data.length - 1}
                            >
                                <img className="rotate-180" src={arrow} alt="right arrow" />
                            </button>
                        </div>
                    </div>

                    {/* Animate section on scroll into view */}
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
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            loop={true}
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
                            initialSlide={defaultIndex}
                            onSlideChange={handleSlideChange}
                        >
                            {data.map((item, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <SwiperSlide key={index}>
                                        {({ isActive }) => (
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
                                        )}
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
