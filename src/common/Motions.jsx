import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

export default function MotionsFade({ children, className = "", delay = 0.1 }) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: 60,
                scale: 0.9,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                mass: 0.5,
                delay,
            }}
            viewport={{ once: false, amount: 0.3 }}
            style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
                perspective: 1000, // give it some depth
            }}
        >
            {children}
        </motion.div>
    );
}
