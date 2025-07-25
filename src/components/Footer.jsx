import Lottie from "lottie-react";
import FoovaVector from "../assets/FOOVA.svg";
import JerseyPartner from "../assets/animation/lp-jersey-partner.json";
import { Link } from "react-router-dom";
import MotionsFade from "../common/Motions";
export default function Footer() {
    return (
        <MotionsFade
            className="
            w-[100dvw]  h-[83dvh]  p-6 
        md:w-full  md:max-w-[100vw] snap-start m-auto md:h-full flex justify-center items-center md:max-h-[83.51vh]"
        >
            <div
                id="container"
                className="
                w-[100dvh]
                h-[100dvh]
                p-4
                flex-col
                gap-2
                md:w-full md:p-[32px] md:max-w-[1360px] flex md:flex-col md:items-start md:justify-start  md:gap-4 md:h-full md:max-h-[581.66px] m-auto  bg-[#232323] bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${FoovaVector})` }}
            >
                {/* Heading */}
                <section
                    className=" 
                 gap-1
    flex flex-col items-center justify-between
    w-[321px] h-[120px] p-1 bg-[#343434]
    md:flex-row md:justify-between md:items-center
    md:w-full md:h-full md:max-w-[484px] md:max-h-[67px] md:pr-3"
                >
                    <div
                        className=" 
                          h-[10.70vh] w-full  p-3 
                        flex  justify-center items-center                    
                    md:w-[151px] bg-[#DBFD01] md:flex md:justify-center md:items-center md:h-[59px] "
                    >
                        <p className="text-[1.7rem] leading-[1.25] font-bold font-hubot">
                            W 1 dzień
                        </p>
                    </div>

                    <div className="w-full p-1 h-full flex justify-center items-end  md:h-auto  md:w-auto">
                        <p className="text-[1.2rem] text-[#F6F6F6] font-medium leading-[1.25] font-hubot">
                            Wdrożenie na Twoich kanałach!
                        </p>
                    </div>
                </section>

                {/* Animation section  */}
                <section
                    className="
                        w-[321px] h-[315px]
                        flex flex-col gap-10
                         items-center justify-center
                        
                md:w-full md:gap-10  md:max-w-[1296] md:flex md:flex-row md:items-center md:justify-between md:h-full md:max-h-[205.66px]  "
                >
                    <div className=" w-[321px] h-[70px] md:w-[1016] md:h-[160px]">
                        <h3
                            className="
                       
                        md:text-[64px] text-[28px] w-[321px] h-[70px] md:w-[1016px]  md:h-[160px]  text-[#F6F6F6] font-hubot font-bold leading-[1.25]"
                        >
                            Chcesz zostać
                            <p>Partnerem Foova FC?</p>
                        </h3>
                    </div>
                    {/* animated image */}
                    <div class=" md:w-[236px] md:h-[200.66px] w-[30vh] h-[245.66px]">
                        <Lottie
                            classID="w-[236px] h-[200.66px]"
                            animationData={JerseyPartner}
                            loop={true}
                            autoplay={true}
                        />
                    </div>
                </section>

                {/* email section */}

                <section className=" flex gap-1 flex-col md:flex md:justify-start md:flex-col md:items-start md:gap-3">
                    <p className="text-[1rem] font-medium leading-[1.25] text-[#F6F6F6] font-hubot">
                        Napisz do nas:
                    </p>
                    <h2 className="md:text-[62px] text-2xl  underline text-[#F6F6F6] font-bold leading-[1.25] font-hubot">
                        partners@foova.org
                    </h2>
                </section>

                {/* footer section */}
                <section
                    className=" 
                flex flex-col justify-center md:flex-row items-center gap-2
                w-[321px] h-[80px]
                md:max-w-[1296] md:mt-4 border-t-[1px]  border-t-[#FFFFFF4D] md:lex md:justify-between md:items-end md:w-full md:max-h-[44px] md:h-full "
                >
                    <p className="md:text-[15px] mt-2 font-medium font-hubot leading-[1.25] text-[#F6F6F6]">
                        © FOOVA 2025
                    </p>
                    <div className=" flex gap-2 md:flex-row flex-col justify-center items-center md:flex md:justify-between md:gap-3 md:items-center">
                        <Link
                            to="/informacje-usunięciu-konta"
                            className="md:text-[15px] text-[14px] hover:underline font-medium font-hubot leading-[1.25] text-[#D1D1D1]"
                        >
                            Informacje o Usunięciu Konta
                        </Link>
                        <div className="flex   items-center justify-between gap-3">
                            <Link
                                to="/polityka-prytwatności"
                                className="md:text-[15px] text-[14px] hover:underline font-medium font-hubot leading-[1.25] text-[#D1D1D1]"
                            >
                                Polityka Prytwatności
                            </Link>
                            <Link
                                to="/regulamin"
                                className="md:text-[15px] text-[14px] hover:underline font-medium font-hubot leading-[1.25] text-[#D1D1D1]"
                            >
                                Regulamin
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </MotionsFade>
    );
}
