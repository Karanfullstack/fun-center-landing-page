import Download from "./components/Download";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Ranking from "./components/Ranking";
import RankingTwo from "./components/RankingTwo";
import Slides from "./components/Slides";
import CustomCursor from "./common/CursorEffect";

function App() {
    return (
        <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide ">
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
