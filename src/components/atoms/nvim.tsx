"use client"
import { Ubuntu_Mono } from "next/font/google";
import { Comfortaa } from "next/font/google";

const font = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const comfortaa = Comfortaa({ subsets: ["greek"] });

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FiMinimize } from "react-icons/fi";
import { FaWindowMinimize } from "react-icons/fa";
import LtrGrid from "./ltrGrid";
import TypeIt from "typeit-react";
import Link from "next/link";

import { RepoData } from "@/constants/repoData";

import { ResumeUrl } from "@/constants/resumeData";

const titlebarButtonClassName = "size-[30px] bg-slate-200 flex justify-center items-center rounded-[9px] transition-all overflow-hidden sm:hover:bg-slate-400 active:bg-slate-400 duration-300 shadow"

const Nvim = () => {
    const [fileSize, setFileSize] = useState<string>("000");

    useEffect(() => {
        const interval = setInterval(() => {
            setFileSize((prev) => {
                const num = parseInt(prev) + 1;
                if (num === 247) {
                    clearInterval(interval);
                }
                return num.toString().padStart(3, "0");
            });
        }, 10);

        return () => clearInterval(interval);
    }, []); 

    return (
        <div className = {`w-full bg-slate-800 rounded-[12px] max-w-[700px] min-h-[100px] p-[4px] h-full ${font.className} font-bold sm:text-[24px] text-[18px]`}>
            <div className = "flex flex-col justify-between w-full rounded-[10px] overflow-hidden h-full">
                <div className = "bg-slate-800 h-fit w-full p-[8px] flex flex-row justify-between items-center">
                    <div className = "flex-1 flex flex-row gap-[4px]">
                        <button className = {titlebarButtonClassName}>
                            <FaPlus size="15px" className = "text-black" />
                        </button>
                        <button className = {titlebarButtonClassName}>
                            <FaAngleDown size="24px" className = "text-black" />
                        </button>
                    </div>
                    <div className = "flex-1 flex flex-row justify-center">
                        <div className = "text-slate-100 whitespace-nowrap tracking-tighter">neovim</div>
                    </div>
                    <div className = "flex-1 flex flex-row justify-end">
                        <div className = "flex flex-row gap-[4px]">
                            {/*
                            <button className = {titlebarButtonClassName}>
                                <FaWindowMinimize size="15px" className = "text-black" />
                            </button>
                            <button className = {titlebarButtonClassName}>
                                <FiMinimize size="18px" className = "text-black" />
                            </button>
                            <button className = {titlebarButtonClassName}>
                                <FaPlus size="18px" className = "text-black rotate-45" />
                            </button>
                            */}
                            <Link href = {RepoData.nvim.url} rel="noopener noreferrer" target="_blank" >
                                <button className = {`${titlebarButtonClassName} sm:w-[108px] w-[80px]`}>config</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className = "h-full rounded-[8px] w-full bg-[#1a1b26] pl-[24px] p-[8px] text-slate-300 flex flex-row justify-between">
                    <div className = "">
                        <div className = "text-slate-500">
                            1<br />
                            2<br />
                            3<br />
                            4<br />
                            5<br />
                            6<br />
                            7<br />
                            <div className = " md:hidden">
                                <div className = "sm:hidden">
                                    8<br />
                                    9<br />
                                    10<br />
                                    11<br />
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className = "pl-[8px] text-white tracking-tighter w-full">
                        <TypeIt
                            options={{
                                waitUntilVisible: true,
                                cursorChar: "_",
                            }}

                            className = "text-yellow-300"
                        ><span>Hello, I am Krishnachandran</span><span>&nbsp;</span></TypeIt><br />
                        I am a software developer based in Kerala with over 4 years of programming experience and a diverse portfolio<br />
                        I craft captivating and functional digital experiences merging creativity to code to bring ideas to life<br />
                        <Link href = {ResumeUrl} rel="noopener noreferrer" target="_blank">
                        <TypeIt
                            options={{
                                waitUntilVisible: true,
                                startDelay: 2000,
                                cursorChar: "▯",
                            }}

                            className = "text-pink-500"
                        >
                            <span className = "underline underline-offset-4 cursor-pointer" >See my resume ↗</span><span>&nbsp;</span> 
                        </TypeIt>
                        </Link>
                    </div>
                </div>
                <div className = "bg-[#1f1f23] w-full flex flex-row justify-between">
                    <div className="flex flex-row gap-[10px]">
                        <div className = "bg-[#50b0f0] sm:w-[8px] w-[4px] h-full" />
                        <div className = "text-white flex flex-row items-center font-normal">
                            <div>
                                <LtrGrid ltrs={["E", "6", "2", "B"]} color = "#4caf50" />
                            </div>
                            <div className = {`font[${comfortaa}] text-blue-800 px-[2px]`}>
                                θ
                            </div>
                            <div className = "bg-[#0066cc] sm:pl-[16px] pl-[8px]">
                                <LtrGrid ltrs = {["F", "4", "8", "A"]} color = "#ffffff" />
                            </div>
                            <div className = "bg-[#0066cc] sm:px-[12px] px-[6px] font-bold">
                                readme.md
                            </div>
                            <div className = {`font[${comfortaa}] text-blue-800 px-[2px]`}>
                                ζ 
                            </div>
                            <div className = "text-slate-300 font-bold sm:pl-[8px] pl-[4px]">
                                {fileSize}b
                            </div>
                        </div>
                    </div>
                    <div className = "flex flex-row justify-end items-end gap-[6px]">
                        <div className = "text-slate-300">top</div>
                        <div className = "sm:w-[32px] w-[16px] h-1/4 bg-[#50b0f0] mb-[5px]" />
                    </div>
                </div>
                <div className = "w-full sm:h-[40px] h-[20px] bg-black" />
            </div>
        </div>
    )
}

export default Nvim;