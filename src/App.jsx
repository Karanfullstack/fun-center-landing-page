import Download from "./components/Download";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Hero from "./components/Hero";

import Ranking from "./components/Ranking";
import Slides from "./components/Slides";
import Stacking from "./components/Stacking";
import { useEffect } from "react";

function App() {
    return (
        <div className="h-screen snap-y snap-mandatory  w-screen m-auto overflow-y-scroll  scroll-smooth scrollbar-hide ">
            <Hero />
            <Frame />
            <Slides />
            <Ranking />
            <Download />
            <Footer />
        </div>
    );
}

export default App;
