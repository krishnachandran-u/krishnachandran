"use client"

import { AnimatePresence, motion } from "framer-motion";

export default function Template({children}: {children : React.ReactNode}) {
    return (
        <motion.div
            initial = {{opacity: 0, scale: 0.9}}
            animate = {{opacity: 1 , scale: 1}}
            exit = {{opacity: 0, scale: 0.9}}
            transition = {{type: "spring", duration: 0.3, delay: 0.2}}
        >
            {children}
        </motion.div>
    )
}