import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
    const [isIphone12Mini, setIsIphone12Mini] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        const isIphone = /iPhone/.test(ua);

        const width = window.screen.width;
        const height = window.screen.height;

        // Approximate iPhone 12 Mini dimensions
        if (isIphone && ((width === 360 && height === 780) || (width === 780 && height === 360))) {
            setIsIphone12Mini(true);
        }
    }, []);

    return (
        <div className={`w-full md:-mt-20 mb-24 md:px-6 bg-black ${isIphone12Mini ? "pb-8" : ""}`}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={16}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={3} // default: 3 cards
                breakpoints={{
                    768: { slidesPerView: 7 }, // ≥768px: 7 cards
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`w-full p-3 bg-[#232323] shadow-md flex flex-col items-start ${
                                isIphone12Mini ? "h-[130px]" : "h-[150px]"
                            }`}
                        >
                            <span className="font-hubot font-bold text-[20px] text-[#DBFD01]">
                                {index + 1}.
                            </span>

                            <div className="mt-auto w-full">
                                <h2 className="text-white font-hubot font-bold text-[20px] sm:text-[24px] leading-tight">
                                    {item.price} zł
                                </h2>
                                <p className="text-white text-[12px] sm:text-[14px] font-hubot line-clamp-2 font-medium leading-snug">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
