import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import HeroVector from "../assets/bg-vector.svg";
import appicon from "../assets/App-Icon.svg";
import MotionsFade from "../common/Motions";
import Navbar from "./Navbar";
import "../styles/hero.module.css";

import CRA from "../assets/CRA/jersey_home@2x.png";
import CRAAway from "../assets/CRA/jersey_away@2x.png";

import GZA from "../assets/CRA/jersey_home@2x.png";
import GZAAway from "../assets/GZA/jersey_away@2x.png";

import JAG from "../assets/GZA/jersey_home@2x.png";
import JAGAway from "../assets/GZA/jersey_away@2x.png";

import KAT from "../assets/KAT/jersey_home@2x.png";
import KATAway from "../assets/KAT/jersey_away@2x.png";

import KOR from "../assets/KOR/jersey_home@2x.png";
import KORAway from "../assets/KOR/jersey_away@2x.png";

import LEG from "../assets/LEG/jersey_home@2x.png";
import LEGAway from "../assets/LEG/jersey_away@2x.png";

import LGD from "../assets/LGD/jersey_home@2x.png";
import LGDAway from "../assets/LGD/jersey_away@2x.png";

import LPO from "../assets/LPO/jersey_home@2x.png";
import LPOAway from "../assets/LPO/jersey_away@2x.png";

import MLB from "../assets/MLB/jersey_home@2x.png";
import MLBAway from "../assets/MLB/jersey_away@2x.png";

import PIA from "../assets/PIA/jersey_home@2x.png";
import PIAAway from "../assets/PIA/jersey_away@2x.png";

import PlaceHolder from "../assets/PLACEHOLDER/jersey_home@2x.png";
import PlaceHolderAway from "../assets/PLACEHOLDER/jersey_away@2x.png";

import PNI from "../assets/PIA/jersey_home@2x.png";
import PNIAway from "../assets/PIA/jersey_away@2x.png";

import POG from "../assets/POG/jersey_home@2x.png";
import POGAway from "../assets/POG/jersey_away@2x.png";

import RAD from "../assets/RAD/jersey_home@2x.png";
import RADAway from "../assets/RAD/jersey_away@2x.png";

import RAK from "../assets/RAK/jersey_home@2x.png";
import RAKAway from "../assets/RAK/jersey_away@2x.png";

import SLA from "../assets/SLA/Vector.png";
import SLAAway from "../assets/SLA/Vector-1.png";

import STM from "../assets/STM/jersey_home@2x.png";
import STMAway from "../assets/STM/jersey_away@2x.png";

import WID from "../assets/WID/jersey_home@2x.png";
import WIDAway from "../assets/WID/jersey_away@2x.png";

import ZAG from "../assets/ZAG/jersey_home@2x.png";
import ZAGAway from "../assets/ZAG/jersey_away@2x.png";

const jerseys = [
    { club: "Cracovia", type: "Home", src: CRA },
    { club: "Cracovia", type: "Away", src: CRAAway },
    { club: "Górnik Zabrze", type: "Home", src: GZA },
    { club: "Górnik Zabrze", type: "Away", src: GZAAway },
    { club: "Jagiellonia", type: "Home", src: JAG },
    { club: "Jagiellonia", type: "Away", src: JAGAway },
    { club: "Katowice", type: "Home", src: KAT },
    { club: "Katowice", type: "Away", src: KATAway },
    { club: "Korona Kielce", type: "Home", src: KOR },
    { club: "Korona Kielce", type: "Away", src: KORAway },
    { club: "Legia Warszawa", type: "Home", src: LEG },
    { club: "Legia Warszawa", type: "Away", src: LEGAway },
    { club: "Lechia Gdańsk", type: "Home", src: LGD },
    { club: "Lechia Gdańsk", type: "Away", src: LGDAway },
    { club: "Lech Poznań", type: "Home", src: LPO },
    { club: "Lech Poznań", type: "Away", src: LPOAway },
    { club: "Miedź Legnica", type: "Home", src: MLB },
    { club: "Miedź Legnica", type: "Away", src: MLBAway },
    { club: "Piast Gliwice", type: "Home", src: PIA },
    { club: "Piast Gliwice", type: "Away", src: PIAAway },
    { club: "Puszcza Niepołomice", type: "Home", src: PNI },
    { club: "Puszcza Niepołomice", type: "Away", src: PNIAway },
    { club: "Pogoń Szczecin", type: "Home", src: POG },
    { club: "Pogoń Szczecin", type: "Away", src: POGAway },
    { club: "Radomiak Radom", type: "Home", src: RAD },
    { club: "Radomiak Radom", type: "Away", src: RADAway },
    { club: "Raków Częstochowa", type: "Home", src: RAK },
    { club: "Raków Częstochowa", type: "Away", src: RAKAway },
    { club: "Śląsk Wrocław", type: "Home", src: SLA },
    { club: "Śląsk Wrocław", type: "Away", src: SLAAway },
    { club: "Stal Mielec", type: "Home", src: STM },
    { club: "Stal Mielec", type: "Away", src: STMAway },
    { club: "Widzew Łódź", type: "Home", src: WID },
    { club: "Widzew Łódź", type: "Away", src: WIDAway },
    { club: "Zagłębie Lubin", type: "Home", src: ZAG },
    { club: "Zagłębie Lubin", type: "Away", src: ZAGAway },
    { club: "Placeholder FC", type: "Home", src: PlaceHolder },
    { club: "Placeholder FC", type: "Away", src: PlaceHolderAway },
];

export default function Hero() {
    const bgRef = useRef(null);
    const [jerseyIndex, setJerseyIndex] = useState(0);

    // Rotate jersey every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setJerseyIndex((prev) => (prev + 1) % jerseys.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Fix for mobile viewport height inconsistency
    useEffect(() => {
        const setVH = () => {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        };
        setVH();
        window.addEventListener("resize", setVH);
        return () => window.removeEventListener("resize", setVH);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        };

        const onScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="bg-black px-3 snap-start font-hubot overflow-hidden min-h-screen relative">
            <Navbar />

            <Container>
                <div
                    className="relative flex flex-col px-2 sm:px-0 pt-6 pb-32"
                    style={{ minHeight: "calc(var(--vh, 1vh) * 100 - 88px)" }}
                >
                    {/* Background Vector */}
                    <div
                        ref={bgRef}
                        className="absolute top-3 left-0 right-0 h-[75vh] bg-no-repeat bg-contain bg-top transition-transform duration-75 ease-out will-change-transform pointer-events-none"
                        style={{ backgroundImage: `url(${HeroVector})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70" />

                    {/* Foreground Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-white p-4 sm:p-6 flex-grow">
                        <MotionsFade delay={0.3}>
                            <div className="flex flex-col gap-4 justify-center items-center mt-6 sm:mt-0">
                                <img
                                    src={jerseys[jerseyIndex].src}
                                    alt={`${jerseys[jerseyIndex].club} ${jerseys[jerseyIndex].type}`}
                                    className="w-[30vw] max-w-xs sm:w-[10vw] transition-opacity duration-500 ease-in-out"
                                />
                                <span className="text-base sm:text-xl text-center opacity-80">
                                    Nie ma farta. Jest tylko wiedza!
                                </span>
                            </div>
                        </MotionsFade>

                        <MotionsFade delay={0.4}>
                            <h1 className="text-3xl sm:text-[65px] lg:text-[50px] font-bold leading-tight text-center mt-4">
                                Udowodnij, że wiesz więcej
                                <br />
                                niż reszta i zgarnij nagrody!
                            </h1>
                        </MotionsFade>
                    </div>

                    {/* CTA */}
                    <MotionsFade
                        delay={0.5}
                        className="absolute bottom-5 safari:bottom-6 left-0 w-full px-4"
                    >
                        <div className="bg-[#232323] w-full sm:w-fit mx-auto flex items-center gap-3 sm:gap-4 h-[60px] max-h-[64px] min-h-[48px] px-1 sm:px-1 shadow-lg">
                            <img
                                src={appicon}
                                alt="app icon"
                                className="h-full p-2 aspect-square w-auto flex-shrink-0 object-contain"
                            />
                            <span className="text-white text-[3.5vw] sm:text-sm md:text-base font-hubot text-left pr-2 leading-tight break-words w-full">
                                Pobierz apkę FOOVA FC i pokaż kto tu rządzi.
                            </span>
                        </div>
                    </MotionsFade>
                </div>
            </Container>
        </div>
    );
}
