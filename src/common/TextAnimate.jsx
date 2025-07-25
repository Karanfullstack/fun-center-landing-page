import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextAnimate({ children }) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useEffect(() => {
        const el1 = ref1.current;
        const el2 = ref2.current;

        gsap.set(el1, { x: "-150vw", opacity: 0 });
        gsap.set(el2, { x: "150vw", opacity: 0 });

        gsap.to(el1, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.6)",
            delay: 0.3,
        });

        gsap.to(el2, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            delay: 1.2,
        });
    }, []);

    const first = React.cloneElement(children[0], { ref: ref1 });
    const second = React.cloneElement(children[1], { ref: ref2 });

    return (
        <>
            {first}
            {second}
        </>
    );
}
