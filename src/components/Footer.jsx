import Lottie from "lottie-react";
import FoovaVector from "../assets/FOOVA.svg";
import JerseyPartner from "../assets/animation/lp-jersey-partner.json";
import { Link } from "react-router-dom";
import MotionsFade from "../common/Motions";

export default function Footer() {
    return (
        <>
            <MotionsFade
                className="
            max-h-[91vh] p-4  h-full
        lg:w-full max-w-[1440px] overflow-x-hidden lg:block md:hidden sm:block  w-full  font-hubot m-auto  flex justify-center items-center lg:max-h-[85.51vh]"
            >
                <div
                    id="container"
                    className="
                w-full
                max-h-[90%]
                h-auto
               
                p-4
                flex-col
                gap-5
                lg:w-full lg:p-[32px] lg:max-w-[1360px] flex lg:flex-col lg:items-start lg:justify-start  lg:gap-4 lg:h-full lg:max-h-[581.66px] m-auto  bg-[#232323] bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${FoovaVector})` }}
                >
                    {/* Heading */}
                    <section
                        className=" 
                    w-[100%] h-[100px]
                    m-auto
                    lg:m-0
                    gap-1
    flex flex-col items-center justify-between
     p-1 bg-[#343434] 
    lg:flex-row lg:justify-between lg:items-center
    lg:w-full lg:h-full lg:max-w-[484px] lg:p-1 lg:max-h-[67px] lg:pr-3"
                    >
                        <div
                            className=" 
                         w-full p-3 
    flex justify-center items-center 
    
    lg:w-[151px] bg-[#DBFD01]"
                        >
                            <p className="text-[clamp(1.25rem,2vw,2rem)] sm:text-[1.25rem] leading-[1.5] font-bold font-hubot">
                                W 1 dzień
                            </p>
                        </div>

                        <div className="w-full  p-2 h-auto flex justify-center items-center lg:w-auto">
                            <p className="text-[clamp(16px, 2vw, 20px)] lg:text-[1.2rem] text-[#F6F6F6] font-medium leading-[125%] font-hubot">
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
    lg:w-full lg:gap-10 lg:max-w-[1296px]
    lg:flex-row lg:items-center lg:justify-between
    lg:h-full lg:max-h-[205.66px]
  "
                    >
                        <div className=" w-[100%] h-auto text-left   lg:w-full lg:h-full ">
                            <h3 className="text-[150%] md:text-[clamp(3.5rem,2vw,64px)] w-full text-[#F6F6F6] font-hubot font-bold leading-[125%]">
                                Chcesz zostać
                                <br />
                                Partnerem Foova FC?
                            </h3>
                        </div>
                        {/* animated image */}
                        <div class=" w-[50%]  lg:w-[260px] lg:h-[200.66px]">
                            <Lottie
                                classID="w-full h-full"
                                animationData={JerseyPartner}
                                loop={true}
                                autoplay={true}
                            />
                        </div>
                    </section>

                    {/* email section */}

                    <section className="flex w-[100%] flex-col gap-1 lg:gap-3 lg:items-start lg:justify-start">
                        <p className="text-[clamp(1rem, 2vw, 2rem)] font-medium leading-[125%] text-[#F6F6F6] font-hubot">
                            Napisz do nas:
                        </p>
                        <a
                            href="mailto:partners@foova.org"
                            className="text-[clamp(1.25rem,2vw,1.75rem)] lg:text-[62px] underline text-[#F6F6F6] font-bold leading-[125%] font-hubot"
                        >
                            partners@foova.org
                        </a>
                    </section>

                    {/* footer */}
                    <section
                        className="
                    w-[100%] max-h-[20%]
                   
    flex flex-col lg:flex-row lg:justify-between lg:items-center
    items-center gap-2 py-2 lg:py-3
    lg:w-full lg:max-w-[1296px] lg:max-h-[44px] lg:h-full lg:mt-4
    border-t border-t-[#FFFFFF4D]
  "
                    >
                        <div className="w-full h-full flex-col items-center  flex  lg:flex-row lg:items-center lg:justify-start">
                            <p className="text-[100%]  lg:text-base font-medium font-hubot leading-[1.5] text-[#F6F6F6]">
                                © FOOVA 2025
                            </p>
                        </div>
                        <div className="flex w-full h-full flex-col lg:flex-row items-center justify-end gap-2 lg:gap-3">
                            <Link
                                to="/regulamin"
                                className="text-[85%] lg:text-base hover:underline font-medium font-hubot leading-[125%] text-[#D1D1D1]"
                            >
                                Regulamin
                            </Link>
                            <Link
                                to="/polityka-prytwatności"
                                className="text-[85%] lg:text-base hover:underline font-medium font-hubot leading-[125%] text-[#D1D1D1]"
                            >
                                Prywatności
                            </Link>
                            <Link
                                to="/informacje-usunięciu-konta"
                                className="text-[85%] lg:text-base hover:underline font-medium font-hubot leading-[125%] text-[#D1D1D1]"
                            >
                                Informacje o Usunięciu Konta
                            </Link>
                        </div>
                    </section>
                </div>
            </MotionsFade>

            {/* tablet */}

            <MotionsFade
                className="
            h-[80vh] p-4 
          md:max-w-[900px] md:mx-auto w-full hidden  md:block sm:hidden lg:hidden  font-hubot m-auto  justify-center items-center "
            >
                <div
                    id="container"
                    className="
                w-full 
                min-h-[94.1%]
              
                p-4
                flex-col
                gap-5
                flex    m-auto  bg-[#232323] bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${FoovaVector})` }}
                >
                    {/* Heading */}
                    <section
                        className=" 
                    w-[100%] h-40 
                    m-auto
                    
                    gap-1
    flex flex-col items-center justify-between
     p-1 bg-[#343434]
    
    "
                    >
                        <div
                            className=" 
                         w-full p-3  h-1/2
    flex justify-center items-center 

    
     bg-[#DBFD01]"
                        >
                            <p className="text-[clamp(2rem,3vw,4rem)]  leading-[1.5] flex items-center justify-center h-full font-bold font-hubot">
                                W 1 dzień
                            </p>
                        </div>

                        <div className="w-full h-1/2  p-2  flex justify-center items-center lg:w-auto">
                            <p className="text-[clamp(1.6rem,2.2vw,4rem)]  text-[#F6F6F6] font-medium leading-[125%] font-hubot">
                                Wdrożenie na Twoich kanałach!
                            </p>
                        </div>
                    </section>

                    {/* Animation section  */}
                    <section
                        className="

    w-screen 
    
    m-auto
    flex flex-col gap-5 items-center justify-center
    
   
  "
                    >
                        <div className=" w-[100%] h-auto text-left   ">
                            <h3 className="text-[6vw]  w-full text-[#F6F6F6] font-hubot font-bold leading-[125%]">
                                Chcesz zostać
                                <br />
                                Partnerem Foova FC?
                            </h3>
                        </div>
                        {/* animated image */}
                        <div class=" w-[32vw] ">
                            <Lottie
                                classID="w-full h-full"
                                animationData={JerseyPartner}
                                loop={true}
                                autoplay={true}
                            />
                        </div>
                    </section>

                    {/* email section */}

                    <section className="flex w-[100%] flex-col gap-1 ">
                        <p className="text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-[125%] text-[#F6F6F6] font-hubot">
                            Napisz do nas:
                        </p>
                        <a
                            href="mailto:partners@foova.org"
                            className="text-[clamp(2.25rem,2vw,1.75rem)]  underline text-[#F6F6F6] font-bold leading-[125%] font-hubot"
                        >
                            partners@foova.org
                        </a>
                    </section>

                    {/* footer */}
                    <section
                        className="
                    w-[100%] h-[15%]
                   flex flex-row 
    items-center gap-2 py-2 lg:py-3
   justify-center 
    border-t border-t-[#FFFFFF4D]
  "
                    >
                        <div className="w-1/3 h-full flex-row justify-start  items-center  flex  ">
                            <p className="text-[clamp(1rem, 1vw,1rem)]  font-medium font-hubot leading-[125%] text-[#F6F6F6]">
                                © FOOVA 2025
                            </p>
                        </div>
                        <div className="flex w-full h-full flex-row items-center justify-end gap-4">
                            <Link
                                to="/regulamin"
                                className="text-[clamp(1rem, 1vw,1rem)]  hover:underline font-medium font-hubot leading-[125%] text-[#D1D1D1]"
                            >
                                Regulamin
                            </Link>
                            <Link
                                to="/polityka-prytwatności"
                                className="text-[clamp(1rem, 1vw,1rem)]  hover:underline font-medium font-hubot leading-[125%] text-[#D1D1D1]"
                            >
                                Prywatności
                            </Link>
                            <Link
                                to="/informacje-usunięciu-konta"
                                className="text-[clamp(1rem, 1vw,1rem)]  hover:underline font-medium font-hubot leading-[125%] text-[#D1D1D1]"
                            >
                                Informacje o Usunięciu Konta
                            </Link>
                        </div>
                    </section>
                </div>
            </MotionsFade>
        </>
    );
}
