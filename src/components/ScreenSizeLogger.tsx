"use client"

import { use, useEffect, useState } from "react";

export default function ScreenSizeLogger() {
    const [screenWidth, setScreenWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0));
    const [screenHeight, setScreenHeight] = useState(() => (typeof window !== 'undefined' ? window.innerHeight : 0)) 

    useEffect(() => {

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])

    useEffect(() => {

        console.log("Screen Width: ", screenWidth);
        console.log("Screen Height: ", screenHeight);

    }, [screenWidth, screenHeight]);

    return(
        <div className = "absolute z-10 top-0 right-0 border bg-white rounded border-black">
            {screenWidth} X {screenHeight}
        </div>
    );
};