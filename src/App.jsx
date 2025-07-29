import Lenis from "lenis";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Hero from "./components/Hero";

import Ranking from "./components/Ranking";
import Slides from "./components/Slides";

import { useEffect, useRef } from "react";

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => t,
            smoothWheel: true,
            smoothTouch: true,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    const page2Ref = useRef(null);

    const scrollToPage2 = () => {
        page2Ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className=" h-screen snap-y   relative  scroll-container snap-mandatory  max-w-[1440px] m-auto overflow-y-scroll  scroll-smooth scrollbar-hide ">
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
