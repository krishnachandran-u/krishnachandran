"use client"

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';
import { Urbanist } from "next/font/google";

{/*
const NoSSRChrono = dynamic(() => import('react-chrono').then((module) => module.Chrono), {
    ssr: false
});
*/}

const font = Urbanist({ subsets: ["latin"] });

const Milestone = () => {
    const [isChronoMounted, setIsChronoMounted] = useState(false);

    const items = [
      {
        title: "Dec 23 - Mar 24",
        cardTitle: "Oronium",
        cardSubtitle: "Software Engineer Intern",
        cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "2022 - Present",
        cardTitle: "College of Engineering, Trivandrum",
        cardSubtitle: "BTech - Computer Science and Engineering",
        cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ];

    useEffect(() => {
        setIsChronoMounted(true);
    }, [])

    return (
        <div className = {`max-w-[1250px] w-full h-full shadow-lg hover:shadow-2xl rounded-[24px] bg-white transition-all duration-300 p-[24px] ${font.className}`}>
            {typeof window !== 'undefined' && isChronoMounted && (
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    fontSizes = {{
                        cardTitle: "24px",
                        cardSubtitle: "16px",
                    }}
                    highlightCardsOnHover
                    cardHeight={window.innerWidth > 640 ? 100 : 50}
                    useReadMore
                />
            )}
        </div>
    );
}

export default Milestone;