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

import { MilestoneData } from '@/constants/milestoneData';

const Milestones = () => {
    const [isChronoMounted, setIsChronoMounted] = useState(false);

    useEffect(() => {
        setIsChronoMounted(true);
    }, [])

    return (
        <div className = {`max-w-[1250px] w-full h-full shadow-lg hover:shadow-2xl rounded-[24px] bg-white transition-all duration-300 p-[24px] ${font.className}`}>
            {typeof window !== 'undefined' && isChronoMounted && (
                <Chrono
                    items={MilestoneData}
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

export default Milestones;