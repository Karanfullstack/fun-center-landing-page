import { useEffect, useRef } from "react";

export default function Parallax({ speed = 0.2, children }) {
    const ref = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (ref.current) {
                // Negative to move in opposite scroll direction (typical parallax)
                ref.current.style.transform = `translateY(${scrollY * speed * -1}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial call so position is correct on load
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return (
        <div
            ref={ref}
            style={{
                willChange: "transform",
                transition: "transform 0.1s linear",
            }}
        >
            {children}
        </div>
    );
}
