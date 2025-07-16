import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
    const defaultIndex = Math.floor(data.length / 2);
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex); // realIndex avoids duplicate on loop
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
        <div className="w-full font-hubot font-[800] px-5 bg-black pt-4 h-screen flex flex-col">
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
                                className={`w-1/2 flex  items-center justify-center h-full transition-colors ${
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

                    {/* Swiper */}
                    <section className="flex-grow mt-10 px-4 flex items-center">
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
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        style={{ willChange: "transform, opacity" }}
                                        className={`transition-all duration-300 ease-out ${
                                            activeIndex === index
                                                ? "scale-105 opacity-100 z-10"
                                                : "scale-95 opacity-60 z-0"
                                        }`}
                                    >
                                        <Card index={index} data={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </div>
            </Container>
        </div>
    );
}
