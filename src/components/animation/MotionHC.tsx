import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const MotionHoc = (Component: any) => {

    return function HOC() {

        return (
            <AnimatePresence>
                <motion.div
                    initial={{ x: 0, opacity: 0.8 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.55, bounce: 0, bounceDamping: 0, ease: "easeInOut" }}
                    exit={{ x: 0, opacity: 0.8 }}>
                    <Component />
                </motion.div>
            </AnimatePresence>
        );
    };
};

export default MotionHoc;