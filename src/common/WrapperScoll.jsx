import { useEffect, useRef } from "react";

const ParallaxWrapper = ({ speed = 0.3, children }) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const el = ref.current;
            if (!el) return;

            const offset = window.scrollY * speed;
            el.style.transform = `translateY(${offset}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return (
        <div ref={ref} style={{ willChange: "transform", transition: "transform 0.1s linear" }}>
            {children}
        </div>
    );
};

export default ParallaxWrapper;
