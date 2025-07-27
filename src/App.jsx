import FadeInSection from "./common/WrapperScoll";
import ParallaxWrapper from "./common/WrapperScoll";
import WindScrollWrapper from "./common/WrapperScoll";
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
            <ParallaxWrapper delay={0.2}>
                <Hero onScroll={scrollToPage2} />
            </ParallaxWrapper>

            <ParallaxWrapper delay={0.2}>
                <Frame />
            </ParallaxWrapper>

            <ParallaxWrapper delay={0.3}>
                <Slides />
            </ParallaxWrapper>

            <ParallaxWrapper delay={0.4}>
                <Ranking onScroll={scrollToPage2} />
            </ParallaxWrapper>
            <ParallaxWrapper delay={0.5}>
                <div ref={page2Ref}>
                    <Download />
                </div>
            </ParallaxWrapper>
            <ParallaxWrapper delay={0.6}>
                <Footer />
            </ParallaxWrapper>
        </div>
    );
}

export default App;
