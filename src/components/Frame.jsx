import React from "react";
import { motion } from "framer-motion";
import groupFootbal from "../assets/Group.svg";

const Container = ({ children }) => (
    <div className="max-w-[1100px] mx-auto px-4 pt-0 pb-0 sm:px-6 lg:px-8">{children}</div>
);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

export default function App() {
    return (
        <div className="bg-black snap-start snap-y snap-mandatory font-hubot flex flex-col items-center min-h-screen relative">
            <Container>
                <div className="relative min-h-screen flex flex-col justify-center items-center pt-0">
                    <div className="flex relative min-h-[140vh] flex-col-reverse gap-5 justify-center items-center">
                        <div className="w-full sticky top-[40vh] h-[60px] flex justify-center items-center">
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center leading-tight">
                                Apka dla futbolowych Ekspertów.
                            </span>
                        </div>

                        <div className="w-[95%] z-40 sticky top-[22vh] max-w-full sm:w-[510px] sm:max-w-none text-center py-4 bg-[#DBFD01]">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “To było oczywiste!”
                            </span>
                        </div>

                        <div className="w-[85%] sticky top-[20vh] z-30 max-w-full sm:w-[445px] sm:max-w-none text-center py-4 bg-white">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “A nie mówiłem?”
                            </span>
                        </div>

                        <div className="w-[75%] sticky top-[18vh] max-w-full sm:w-[365px] sm:max-w-none text-center py-4 bg-[#DBFD01]">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “Wiedziałem!”
                            </span>
                        </div>

                        {/* Football icon with bigger gap */}
                        <div className="bg-white sticky top-[5vh] rounded-full mb-3 w-[80px] h-[80px] flex items-center justify-center overflow-hidden">
                            <img
                                src={groupFootbal}
                                alt="football"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
