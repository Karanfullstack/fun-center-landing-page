import Download from "./components/Download";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Hero from "./components/Hero";

import Ranking from "./components/Ranking";

import Slides from "./components/Slides";

function App() {
    return (
        <div className="h-screen w-screen m-auto overflow-y-scroll  scroll-smooth scrollbar-hide ">
            <div id="fullpage">
                {" "}
                <Hero />
            </div>
            <div id="fullpage">
                {" "}
                <Frame />
            </div>
            <div id="fullpage">
                {" "}
                <Slides />
            </div>
            <div id="fullpage">
                {" "}
                <Ranking />
            </div>
            <div id="fullpage">
                <Download />
            </div>
            <div id="fullpage">
                <Footer />
            </div>
        </div>
    );
}

export default App;
