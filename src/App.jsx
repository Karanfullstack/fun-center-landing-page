import Download from "./components/Download";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Hero from "./components/Hero";

import Ranking from "./components/Ranking";
import Slides from "./components/Slides";

import { useRef } from "react";

function App() {
    const page2Ref = useRef(null);

    const scrollToPage2 = () => {
        page2Ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="h-screen snap-y scroll-container snap-mandatory  w-screen m-auto overflow-y-scroll  scroll-smooth scrollbar-hide ">
            <Hero onScroll={scrollToPage2} />

            <Frame />

            <Slides />

            <Ranking onScroll={scrollToPage2} />

            <div ref={page2Ref}>
                <Download />
            </div>

            <Footer />
        </div>
    );
}

export default App;
