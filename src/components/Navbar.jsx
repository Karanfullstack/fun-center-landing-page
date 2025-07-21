import logo from "../assets/Vector.svg";
import Mobile from "../assets/mobileversionLogo.png";

export default function Navbar() {
    return (
        <header className="pt-2">
            <nav className="w-full font-hubot h-[10vh] flex items-center justify-between px-4 md:px-6 bg-black">
                {/* Logo Wrapper */}
                <div className="flex items-center h-10 md:h-12">
                    {/* Desktop Logo */}
                    <img
                        src={logo}
                        alt="desktop logo"
                        className="hidden md:block h-full w-auto max-w-[220px]"
                    />
                    {/* Mobile Logo */}
                    <img
                        src={Mobile}
                        alt="mobile logo"
                        className="block md:hidden h-full w-auto max-w-[140px]"
                    />
                </div>

                {/* Download Button */}
                <div className="flex-shrink-0">
                    <button className="bg-[#DBFD01] text-black text-sm md:text-base uppercase font-bold font-hubot font-semicondensed py-2 px-3 w-full md:w-[153px] h-10 md:h-12 overflow-hidden truncate">
                        pobierz apkę
                    </button>
                </div>
            </nav>
        </header>
    );
}
