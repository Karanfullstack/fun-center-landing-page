import React, { useEffect, useRef, useState } from "react";
import footbalIcon from "../assets/Group.svg";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const mouse = useRef({ x: pos.current.x, y: pos.current.y });
    const [isDesktop, setIsDesktop] = useState(false);

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    useEffect(() => {
        // Check if device is desktop/tablet (width >= 768px)
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);

        checkDesktop();

        window.addEventListener("resize", checkDesktop);

        return () => {
            window.removeEventListener("resize", checkDesktop);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            const offsetX = -20; // horizontal gap
            const offsetY = 40; // vertical gap

            pos.current.x = lerp(pos.current.x, mouse.current.x + offsetX, 0.08);
            pos.current.y = lerp(pos.current.y, mouse.current.y + offsetY, 0.08);

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isDesktop]);

    if (!isDesktop) return null; // Don't render on mobile

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 25,
                height: 25,
                backgroundImage: `url(${footbalIcon})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                pointerEvents: "none",
                zIndex: 9999,
                filter: "blur(1px) drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                opacity: 0.9,
                transition: "filter 0.2s ease, opacity 0.2s ease",
            }}
        />
    );
};

export default CustomCursor;
