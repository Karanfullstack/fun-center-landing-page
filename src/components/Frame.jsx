import React from "react";
import { motion } from "framer-motion";
import groupFootbal from "../assets/Group.svg";

const Container = ({ children }) => (
    <div className="max-w-[1360px] mx-auto px-4 pt-0 pb-0 sm:px-6 lg:px-8">{children}</div>
);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const boxVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95, rotateZ: -2 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateZ: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const finalTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 1, ease: "easeOut" },
    },
};

export default function App() {
    return (
        <div className="bg-black h-screen font-hubot flex flex-col justify-center items-center">
            <Container>
                <motion.div
                    className="w-full p-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="flex flex-col gap-5 justify-center items-center">
                        {/* Animated Image */}
                        <motion.div
                            className="bg-white rounded-full mb-3 w-[80px] h-[80px] flex items-center justify-center overflow-hidden"
                            variants={imageVariants}
                        >
                            <img
                                src={groupFootbal}
                                alt="football"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Boxes */}
                        <motion.div
                            className="w-[75%] max-w-full sm:w-[365px] sm:max-w-none text-center py-4 bg-[#DBFD01]"
                            variants={boxVariants}
                        >
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “Wiedziałem!”
                            </span>
                        </motion.div>

                        <motion.div
                            className="w-[85%] max-w-full sm:w-[445px] sm:max-w-none text-center py-4 bg-white"
                            variants={boxVariants}
                        >
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “A nie mówiłem?”
                            </span>
                        </motion.div>

                        <motion.div
                            className="w-[95%] max-w-full sm:w-[510px] sm:max-w-none text-center py-4 bg-[#DBFD01]"
                            variants={boxVariants}
                        >
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                “To było oczywiste!”
                            </span>
                        </motion.div>

                        {/* Final Text */}
                        <motion.div
                            className="w-full h-[60px] flex justify-center items-center"
                            variants={finalTextVariants}
                        >
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center leading-tight">
                                Apka dla futbolowych Ekspertów.
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
