import { useNavigate } from "react-router-dom";
import logo from "../assets/Vector.svg";
import Mobile from "../assets/mobileversionLogo.png";

export default function Navbar({ onScroll }) {
    const navitate = useNavigate();
    return (
        <header className="pt-2 w-full max-w-[1440px] mx-auto">
            <nav className="w-full font-hubot p-5 flex items-center justify-between px-4 md:px-3 bg-black">
                {/* Logo Wrapper */}
                <div className="flex items-center h-10 md:h-12">
                    {/* Desktop Logo */}
                    <img
                        onClick={() => navitate.push("/")}
                        src={logo}
                        alt="desktop logo"
                        className="hidden cursor-pointer md:block h-full w-auto max-w-[220px]"
                    />
                    {/* Mobile Logo */}
                    <img
                        onClick={() => navitate.push("/")}
                        src={Mobile}
                        alt="mobile logo"
                        className="block md:hidden cursor-pointer h-full w-auto max-w-[140px]"
                    />
                </div>

                {/* Download Button */}
                <div className="flex-shrink-0 pointer-events-auto cursor-pointer ">
                    <button
                        onClick={onScroll}
                        className="bg-[#DBFD01]  sm:text-base min-w-[120px] !hover:cursor-pointer hover:bg-[#F1FF93] text-[#1A1A1A] text-base leading-[100%] md:text-base uppercase font-bold font-hubot  py-2 px-3 w-[153px] md:w-[153px] h-[48px] md:h-12  "
                    >
                        pobierz apkę
                    </button>
                </div>
            </nav>
        </header>
    );
}
