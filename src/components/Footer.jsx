import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import Tshirt from "../assets/welcome-i.svg";
import TshirtBack from "../assets/jersey-back.png";
import Vector from "../assets/FOOVA.svg";
import Lottie from "lottie-react";
import JersePartner from "../assets/animation/lp-jersey-partner.json";
const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped((prev) => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Update --vh CSS variable on resize AND scroll for mobile viewport height fixes
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        setVh();

        window.addEventListener("resize", setVh);
        window.addEventListener("scroll", setVh);

        return () => {
            window.removeEventListener("resize", setVh);
            window.removeEventListener("scroll", setVh);
        };
    }, []);

    return (
        <footer
            ref={ref}
            className="
        w-full
        h-[calc(var(--vh,10vh)*100)]
        snap-start
        bg-[#232323]
        font-hubot
        flex flex-col
        relative
        overflow-hidden
      "
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="
          relative
          w-full
          max-w-[1360px]
          mx-auto
          flex-1
          flex
          flex-col
          justify-center
          items-center
          px-4 sm:px-6 md:px-8
          py-6 sm:py-10
          gap-6
          z-10
        "
            >
                {/* Background Vector */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-100 z-0 pointer-events-none"
                    style={{ backgroundImage: `url(${Vector})` }}
                />

                {/* Content */}
                <div className="flex flex-col md:items-start items-center gap-5 w-full z-10">
                    {/* Banner */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full max-w-[480px] h-[55px] sm:h-[65px] bg-[#343434] flex items-center gap-3 justify-start shadow-lg"
                    >
                        <p className="text-[#1A1A1A] bg-[#DBFD01] h-full flex items-center justify-center font-bold px-3 text-[clamp(14px,2.5vw,20px)] leading-none m-0 flex-shrink-0">
                            W 1 dzień
                        </p>
                        <p className="text-white text-[clamp(14px,2vw,18px)] leading-none m-0 flex-shrink-0">
                            Wdrożenie na Twoich kanałach!
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="w-full flex flex-col md:flex-row justify-between items-center gap-6"
                    >
                        <div className="text-white font-bold leading-tight text-center md:text-left text-[clamp(28px,6vw,64px)]">
                            <p>Chcesz zostać</p>
                            <p>Partnerem Foova FC?</p>
                        </div>

                        <div className="relative w-[clamp(200px,60vw,320px)] sm:w-[clamp(200px,50vw,400px)] h-auto perspective-1000">
                            <div className="">
                                <Lottie
                                    animationData={JersePartner}
                                    loop={true}
                                    className="w-full h-auto backface-hidden"
                                    autoplay={true}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants} className="z-10 text-center">
                        <p className="text-white text-[clamp(14px,2vw,20px)] font-medium mb-1">
                            Napisz do nas:
                        </p>
                        <p className="font-bold text-white text-[clamp(20px,5vw,48px)] break-words">
                            <a
                                href="mailto:partners@foova.org"
                                className="bg-[linear-gradient(to_top,_white_3px,_transparent_3px)] bg-no-repeat bg-[length:100%_3px] bg-bottom hover:bg-[length:0%_3px] transition-all duration-300"
                            >
                                partners@foova.org
                            </a>
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
                variants={itemVariants}
                className="w-full border-t border-gray-600 text-[#D1D1D1] text-[clamp(12px,1.5vw,16px)] py-2 sm:py-4 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 z-10 max-w-[1360px] mx-auto"
            >
                <p>© FOOVA 2025</p>
                <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
                    <Link to="/polityka-prytwatności" className="hover:underline">
                        Polityka Prytwatności
                    </Link>
                    <Link to="/regulamin" className="hover:underline">
                        Regulamin
                    </Link>
                    <Link to="/informacje-Usunięciu-konta" className="hover:underline">
                        Informacje o Usunięciu konta
                    </Link>
                </nav>
            </motion.div>
        </footer>
    );
}

export default Footer;
