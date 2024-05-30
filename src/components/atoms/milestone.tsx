"use client"

import { Urbanist } from "next/font/google";
import { Chrono } from "react-chrono";

const font = Urbanist({ subsets: ["latin"] });

const Milestone = () => {
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

    return (
        <div className = {`max-w-[1250px] w-full h-full shadow-lg hover:shadow-2xl rounded-[24px] bg-white transition-all duration-300 p-[24px] ${font.className}`}>
           <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                fontSizes = {{
                    cardTitle: "24px",
                    cardSubtitle: "16px",
                }}
            /> 
        </div>
    );
}

export default Milestone;