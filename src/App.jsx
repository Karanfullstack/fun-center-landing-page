import Download from "./components/Download";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Hero from "./components/Hero";

import Ranking from "./components/Ranking";
import RankingTwo from "./components/RankingTwo";
import Slides from "./components/Slides";

function App() {
    return (
        <div className="h-screen w-screen m-auto overflow-y-scroll  scroll-smooth scrollbar-hide ">
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
