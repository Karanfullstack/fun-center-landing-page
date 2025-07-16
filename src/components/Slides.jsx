import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
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
    {
        img: screen2,
        text: "Stwórz swój profil i udowodnij, że jesteś piłkarskim Ekspertem!",
    },
    {
        img: screen3,
        text: "Zapraszaj ziomków i pokaż im kto tu rządzi!",
    },
    {
        img: screen4,
        text: "Walcz o zwycięstwo w rankingu ogólnym, klubowym i prywatnym!",
    },
    {
        img: screen5,
        text: "Buduj historię Twoich wyników i osiągnięć!",
    },
    {
        img: screen6,
        text: "Bądź na bieżąco z ciekawostkami i wynikami!",
    },
];

export default function Slides() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeBtn, setActiveBtn] = useState("left");

    return (
        <div className="w-full font-hubot font-[800] px-5 bg-black pt-4 h-screen flex flex-col">
            <Container size="1250px" className="flex flex-col h-full">
                <div className="flex flex-col h-full">
                    {/* Header with Arrows */}
                    <div className="h-[48px] flex gap-2 justify-between items-center pt-4 px-4 sm:px-8">
                        <span className="text-white text-md font-normal">
                            Predykcje, ciekawostki i Wy, Eksperci:
                        </span>

                        {/* Custom arrow buttons */}
                        <div className="w-[92px] flex items-center justify-between h-[48px] rounded-md shadow-sm bg-[#121212]">
                            <button
                                onClick={() => setActiveBtn("left")}
                                ref={prevRef}
                                className={`${
                                    activeBtn === "left"
                                        ? "bg-[#DBFD01] cursor-pointer"
                                        : "bg-[#232323]"
                                } w-1/2 font-bold flex items-center justify-center h-full`}
                            >
                                <img src={arrow} alt="leftArrow" />
                            </button>
                            <button
                                onClick={() => setActiveBtn("right")}
                                ref={nextRef}
                                className={`${
                                    activeBtn === "right"
                                        ? "bg-[#DBFD01] cursor-pointer"
                                        : "bg-[#232323]"
                                } w-1/2 font-bold flex items-center justify-center h-full `}
                            >
                                <img className="rotate-180" src={arrow} alt="rightArrow" />
                            </button>
                        </div>
                    </div>

                    {/* Swiper section */}
                    <section className="flex-grow mt-10 px-4 flex items-center">
                        <Swiper
                            modules={[Navigation, EffectFade]}
                            spaceBetween={30}
                            fadeEffect={{ crossFade: true }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 }, // phones
                                640: { slidesPerView: 2 }, // small tablets
                                768: { slidesPerView: 3 }, // tablets & above
                                1024: { slidesPerView: 3 }, // desktop
                            }}
                        >
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card index={index} data={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </div>
            </Container>
        </div>
    );
}
