import { motion } from "motion/react";

export default function MotionsFade({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: -2, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94], // easeOutBack style
                delay: 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }} // triggers earlier
        >
            {children}
        </motion.div>
    );
}
