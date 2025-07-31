import { motion } from "motion/react";

export default function MotionsFade({ children, className = "", delay = 0.1 }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                delay,
            }}
            // viewport={{ once: false, amount: 0.3 }}
            style={{
                willChange: "opacity",
            }}
        >
            {children}
        </motion.div>
    );
}
