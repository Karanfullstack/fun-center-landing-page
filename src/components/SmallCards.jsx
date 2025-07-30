import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import ArrowNavigation from "../common/ArrowNavigation";
import { useInView } from "framer-motion";
const data = [
    { price: 500, text: "Bon do wykorzystania w Media Expert" },
    { price: 400, text: "Karta podarunkowa Allegro" },
    { price: 300, text: "Voucher do Empik" },
    { price: 200, text: "Bon do wykorzystania w Media Markt" },
    { price: 100, text: "Doładowanie Google Play" },
    { price: 50, text: "Zniżka na Spotify Premium" },
    { price: 25, text: "Voucher do Biedronki" },
    { price: 10, text: "Zniżka na Uber" },
    { price: 5, text: "Mała nagroda za udział" },
];

export default function SmallCards() {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sectionRef = useRef(null);
    const [isIphone12Mini, setIsIphone12Mini] = useState(false);
    const inView = useInView(sectionRef, { amount: 0.1, once: true });
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    // Fix viewport height for mobile
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

    useEffect(() => {
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const isIphone = /iPhone/.test(ua);
        const width = window.screen.width;
        const height = window.screen.height;

        if (isIphone && ((width === 360 && height === 780) || (width === 780 && height === 360))) {
            setIsIphone12Mini(true);
        }
    }, []);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (
        <div className={`w-full  md:-mt-20 mb-24 m-auto bg-black ${isIphone12Mini ? "pb-8" : ""}`}>
            {/* Arrow buttons */}
            <div className="w-full  flex justify-end py-5">
                <ArrowNavigation
                    isBeginning={isBeginning}
                    isEnd={isEnd}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </div>
            {/* Swiper */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={6}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;

                    // Needed because refs are null during first render
                    setTimeout(() => {
                        if (swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    });
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                breakpoints={{
                    0: { slidesPerView: 2.1 },
                    640: { slidesPerView: 5.3 },
                    768: { slidesPerView: 6.7 },
                    1024: { slidesPerView: 6.7 },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-wrap justify-center w-full h-full">
                            <div className="sm:w-[190px] sm:h-[190px] w-[170px] h-[170px] aspect-square justify-between gap-5 p-4 bg-[#232323] shadow-md flex flex-col items-start">
                                <span className="font-hubot leading-[1.25] font-bold text-[20px] text-[#DBFD01]">
                                    {index + 1}.
                                </span>
                                <div className="mt-auto flex-wrap  h-[100px]  justify-start w-full flex flex-col gap-2">
                                    <h2 className="text-white font-hubot font-[700] text-[24px] leading-[1.25]">
                                        {item.price} zł
                                    </h2>
                                    <p className="text-white text-[14px] font-hubot font-medium leading-[1.25]">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
