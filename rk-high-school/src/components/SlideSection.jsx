import React from 'react';
import { motion } from "framer-motion";

const SlideSection = ({ children, direction = "up" }) => {

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
            y: direction === "up" ? 60 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default SlideSection;
