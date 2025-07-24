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
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateZ: 0 },
    visible: {
        opacity: 1,
        y: -10,
        scale: 1,
        rotateZ: 0,

        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,

        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function App() {
    return (
        <div className="bg-black snap-start snap-y snap-mandatory font-hubot flex flex-col items-center min-h-[20vh] relative">
            <Container>
                <div className="min-h-[15vh] flex flex-col  items-center pt-0">
                    {/* Content will appear in the sticky section below */}
                </div>

                <div className="relative border min-h-[100vh] flex flex-col justify-center items-center pt-20">
                    <motion.div
                        className="w-full p-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="flex relative min-h-[200vh] flex-col-reverse gap-5 justify-center items-center">
                            {/* Subtitles rendered bottom to top for reversed animation */}
                            <motion.div
                                className="w-full sticky top-[60vh]  h-[60px] flex justify-center items-center"
                                variants={itemVariants}
                            >
                                <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center leading-tight">
                                    Apka dla futbolowych Ekspertów.
                                </span>
                            </motion.div>
                            <motion.div
                                className="w-[95%] z-40 sticky top-[25vh] max-w-full sm:w-[510px] sm:max-w-none text-center py-4 bg-[#DBFD01]"
                                variants={itemVariants}
                            >
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “To było oczywiste!”
                                </span>
                            </motion.div>

                            <motion.div
                                className="w-[85%] sticky top-[20vh] z-30 max-w-full sm:w-[445px] sm:max-w-none text-center py-4 bg-white"
                                variants={itemVariants}
                            >
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “A nie mówiłem?”
                                </span>
                            </motion.div>

                            <motion.div
                                className="w-[75%] sticky top-[15vh] max-w-full sm:w-[365px] sm:max-w-none text-center py-4 bg-[#DBFD01]"
                                variants={itemVariants}
                            >
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                    “Wiedziałem!”
                                </span>
                            </motion.div>

                            <motion.div
                                className="bg-white  rounded-full mb-3 w-[80px] h-[80px] flex items-center justify-center overflow-hidden"
                                variants={imageVariants}
                            >
                                <img
                                    src={groupFootbal}
                                    alt="football"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                        {/* Football icon stays on top */}
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
