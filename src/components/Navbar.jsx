import logo from "../assets/Vector.svg";

export default function Navbar() {
    return (
        <header>
            <nav className="w-full font-hubot h-[88px] flex items-center justify-between px-4 md:px-6 bg-black">
                <div className="flex items-center h-10 md:h-12">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-full w-auto max-w-[140px] md:max-w-[220px]"
                    />
                </div>

                <div className="flex-shrink-0">
                    <button className="bg-[#DBFD01] text-black text-sm md:text-base uppercase font-bold font-hubot font-semicondensed py-2 px-3  w-full md:w-[153px] h-10 md:h-12 overflow-hidden truncate">
                        pobierz apkę
                    </button>
                </div>
            </nav>
        </header>
    );
}
