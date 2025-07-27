import React, { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
    const ref = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(ref.current); // stop observing after fade-in
                }
            },
            {
                threshold: 0.1, // trigger when 10% of component is visible
            }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : "translateY(20px)",
                transition: "opacity 1s ease-out, transform 1s ease-out",
            }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
