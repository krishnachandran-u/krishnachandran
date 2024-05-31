"use client"

import { useState } from "react";
import { Urbanist } from "next/font/google";

import { AnimatePresence, motion } from "framer-motion";

const font = Urbanist({ subsets: ["latin"] });

import ContactPopup from "./contactPopup";

const Fab = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    return (
        <div className = {`p-[16px] ${font.className}`}>
            <div className = "rounded-[16px] border-[1px] shadow-lg transition-all hover:shadow-2xl duration-300 bg-white">
                <div className = "w-full flex flex-row justify-between items-center md:px-[32px] px-[16px] py-[16px] md:text-[24px] sm:text-[18px]">
                    <div>
                        Got an idea brewing in your mind? 
                    </div>
                    <button 
                        onClick = {openPopup}
                        className = "bg-[#202124] md:border-[4px] border-[2px] border-[#202124] sm:hover:border-black active:border-black hover:text-black hover:bg-white transition-all duration-300 hover:-translate-y-1 text-white py-[10px] px-[20px] rounded-[12px] font-extrabold whitespace-nowrap"
                    >
                        Get in touch!
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isPopupOpen && (
                    <motion.div
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        exit = {{opacity: 0}}
                    >
                        <ContactPopup closePopup={closePopup}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Fab;