import Lottie from "lottie-react";
import FoovaVector from "../assets/FOOVA.svg";
import JerseyPartner from "../assets/animation/lp-jersey-partner.json";
import { Link } from "react-router-dom";
import MotionsFade from "../common/Motions";
export default function Footer() {
    return (
        <MotionsFade
            className="
            h-[90vh] p-4 
        md:w-full  md:max-w-[100vw]  snap-start font-hubot m-auto md:h-full flex justify-center items-center md:max-h-[83.51vh]"
        >
            <div
                id="container"
                className="
                w-full
                min-h-[96.1%]
                h-auto
                p-4
                flex-col
                gap-5
                md:w-full md:p-[32px] md:max-w-[1360px] flex md:flex-col md:items-start md:justify-start  md:gap-4 md:h-full md:max-h-[581.66px] m-auto  bg-[#232323] bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${FoovaVector})` }}
            >
                {/* Heading */}
                <section
                    className=" 
                    w-[100%] h-[100px]
                    m-auto
                    md:m-0
                    gap-1
    flex flex-col items-center justify-between
     p-1 bg-[#343434]
    md:flex-row md:justify-between md:items-center
    md:w-full md:h-full md:max-w-[484px] md:p-1 md:max-h-[67px] md:pr-3"
                >
                    <div
                        className=" 
                         w-full p-3 
    flex justify-center items-center 
    
    md:w-[151px] bg-[#DBFD01]"
                    >
                        <p className="text-[clamp(1.25rem,2vw,2rem)] sm:text-[1.25rem] leading-[1.25] font-bold font-hubot">
                            W 1 dzień
                        </p>
                    </div>

                    <div className="w-full  p-2 h-auto flex justify-center items-center md:w-auto">
                        <p className="text-[clamp(16px, 2vw, 20px)] md:text-[1.2rem] text-[#F6F6F6] font-medium leading-[1.25] font-hubot">
                            Wdrożenie na Twoich kanałach!
                        </p>
                    </div>
                </section>

                {/* Animation section  */}
                <section
                    className="

    w-[100%] h-[100%]
    
    m-auto
    flex flex-col gap-5 items-center justify-center
    md:w-full md:gap-10 md:max-w-[1296px]
    md:flex-row md:items-center md:justify-between
    md:h-full md:max-h-[205.66px]
  "
                >
                    <div className=" w-[100%] h-auto text-left   md:w-full md:h-full ">
                        <h3 className="text-[150%] md:text-[4rem] w-full text-[#F6F6F6] font-hubot font-bold leading-[1.25]">
                            Chcesz zostać
                            <br />
                            Partnerem Foova FC?
                        </h3>
                    </div>
                    {/* animated image */}
                    <div class=" w-[50%]  md:w-[236px] md:h-[200.66px]">
                        <Lottie
                            classID="w-full h-full"
                            animationData={JerseyPartner}
                            loop={true}
                            autoplay={true}
                        />
                    </div>
                </section>

                {/* email section */}

                <section className="flex w-[100%] flex-col gap-1 md:gap-3 md:items-start md:justify-start">
                    <p className="text-[clamp(1rem, 2vw, 2rem)] font-medium leading-[1.25] text-[#F6F6F6] font-hubot">
                        Napisz do nas:
                    </p>
                    <a
                        href="mailto:partners@foova.org"
                        className="text-[clamp(1.25rem,2vw,1.75rem)] md:text-[62px] underline text-[#F6F6F6] font-bold leading-[1.25] font-hubot"
                    >
                        partners@foova.org
                    </a>
                </section>

                {/* footer */}
                <section
                    className="
                    w-[100%] h-[15%]
                   
    flex flex-col md:flex-row md:justify-between md:items-center
    items-center gap-2 py-2 md:py-3
    md:w-full md:max-w-[1296px] md:max-h-[44px] md:h-full md:mt-4
    border-t border-t-[#FFFFFF4D]
  "
                >
                    <div className="w-full h-full flex-col items-center  flex  md:flex-row md:items-center md:justify-start">
                        <p className="text-[100%]  md:text-base font-medium font-hubot leading-[1.25] text-[#F6F6F6]">
                            © FOOVA 2025
                        </p>
                    </div>
                    <div className="flex w-full h-full flex-col md:flex-row items-center justify-end gap-2 md:gap-3">
                        <Link
                            onScroll={top}
                            to="/regulamin"
                            className="text-[85%] md:text-base hover:underline font-medium font-hubot leading-[1.25] text-[#D1D1D1]"
                        >
                            Regulamin
                        </Link>
                        <Link
                            onScroll={top}
                            to="/polityka-prytwatności"
                            className="text-[85%] md:text-base hover:underline font-medium font-hubot leading-[1.25] text-[#D1D1D1]"
                        >
                            Polityka Prytwatności
                        </Link>
                        <Link
                            onScroll={top}
                            to="/informacje-usunięciu-konta"
                            className="text-[85%] md:text-base hover:underline font-medium font-hubot leading-[1.25] text-[#D1D1D1]"
                        >
                            Informacje o Usunięciu Konta
                        </Link>
                    </div>
                </section>
            </div>
        </MotionsFade>
    );
}
