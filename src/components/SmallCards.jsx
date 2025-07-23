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
        <div className={`w-full md:-mt-20 mb-24 m-auto   bg-black ${isIphone12Mini ? "pb-8" : ""}`}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={5}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 7 },
                    1024: { slidesPerView: 7 },
                }}
                slidesPerView={1} // default: 3 cards
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center">
                            <div className="w-[170px] h-[150px] sm:aspect-square sm:w-[200px] aspect-square p-4 bg-[#232323] shadow-md flex flex-col items-start">
                                <span className="font-hubot font-bold text-[20px] text-[#DBFD01]">
                                    {index + 1}.
                                </span>

                                <div className="mt-auto w-full flex flex-col gap-2">
                                    <h2 className="text-white font-hubot font-bold text-[20px] sm:text-[24px] leading-tight">
                                        {item.price} zł
                                    </h2>
                                    <p className="text-white text-[12px] sm:text-[14px] font-hubot font-medium leading-snug">
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
