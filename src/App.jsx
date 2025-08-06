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
            duration: 1.6,
            easing: (t) => t,
            smoothWheel: false,
            smoothTouch: true,
            touchMultiplier: 2,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        const onLoad = () => {
            lenis.resize(); // Recalculate scroll size after full load
        };

        window.addEventListener("load", onLoad);

        return () => {
            window.removeEventListener("load", onLoad);
            lenis.destroy(); // Clean up
        };
    }, []);

    const page2Ref = useRef(null);

    const scrollToPage2 = () => {
        page2Ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    return (
        <div className=" h-screen   relative  scroll-container max-w-[1440px] m-auto overflow-y  scroll-auto scrollbar-hide ">
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
