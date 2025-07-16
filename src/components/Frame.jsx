import React from "react";
import groupFootbal from "../assets/Group.svg";

const Container = ({ children }) => (
    <div className="max-w-[1360px] mx-auto px-4 pt-0 pb-0 sm:px-6 lg:px-8">{children}</div>
);

export default function App() {
    return (
        <div className="bg-black min-h-[90vh] font-hubot flex flex-col justify-center items-center">
            <Container>
                <div className="w-full p-3">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <div className="bg-white rounded-full mb-3 w-[80px] h-[80px] flex items-center justify-center overflow-hidden">
                            <img
                                src={groupFootbal}
                                alt="football"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Smallest box on mobile: 75% width */}
                        <div className="w-[75%] max-w-full sm:w-[365px] sm:max-w-none text-center py-4 bg-[#DBFD01]">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center font-bold">
                                “Wiedziałem!”
                            </span>
                        </div>

                        {/* Medium box on mobile: 85% width */}
                        <div className="w-[85%] max-w-full sm:w-[445px] sm:max-w-none text-center py-4 bg-white">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center font-bold">
                                “A nie mówiłem?”
                            </span>
                        </div>

                        {/* Largest box on mobile: 95% width */}
                        <div className="w-[95%] max-w-full sm:w-[510px] sm:max-w-none text-center py-4 bg-[#DBFD01]">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center font-bold">
                                “To było oczywiste!”
                            </span>
                        </div>

                        <div className="w-full h-[60px] flex justify-center items-center">
                            <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold text-center leading-tight">
                                Apka dla futbolowych Ekspertów.
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
