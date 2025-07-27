import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextAnimate({ children }) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate first child from left -100vw to 0
            gsap.fromTo(
                ref1.current,
                { x: "-100vw", opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.6)",
                    delay: 0.3,
                    force3D: true,
                }
            );

            // Animate second child from right 100vw to 0
            gsap.fromTo(
                ref2.current,
                { x: "100vw", opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.5)",
                    delay: 1.2,
                    force3D: true,
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const first = React.cloneElement(children[0], {
        ref: ref1,
        className: "animated-text",
    });
    const second = React.cloneElement(children[1], {
        ref: ref2,
        className: "animated-text",
    });

    return (
        <>
            {first}
            {second}
        </>
    );
}
