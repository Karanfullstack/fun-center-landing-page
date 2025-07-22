import Download from "./components/Download";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Ranking from "./components/Ranking";
import RankingTwo from "./components/RankingTwo";
import Slides from "./components/Slides";
import CustomCursor from "./common/CursorEffect";
import { div } from "framer-motion/client";
// snap-y snap-mandatory
function App() {
    return (
        <div className="h-screen w-full max-w-[1400px] overflow-y-scroll  scroll-smooth scrollbar-hide ">
            <CustomCursor />
            {/* <Navbar /> */}
            <Hero />
            <Frame />
            <Slides />
            <Ranking />
            <RankingTwo />
            <Download />
            <Footer />
        </div>
    );
}

export default App;
