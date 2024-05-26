import { Anonymous_Pro } from "next/font/google";

const font = Anonymous_Pro({ subsets: ["latin"], weight: ["400", "700"] });

import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FiMinimize } from "react-icons/fi";
import { FaWindowMinimize } from "react-icons/fa";

const titlebarButtonClassName = "size-[30px] bg-slate-500 flex justify-center items-center rounded-[8px] transition-all overflow-hidden hover:-translate-y-1 duration-300 shadow"


const Nvim = () => {
    return (
        <div className = {`w-full bg-slate-700 rounded-[12px] max-w-[700px] min-h-[100px] p-[4px] h-full ${font.className} font-bold`}>
            <div className = "flex flex-col justify-between w-full rounded-[10px] overflow-hidden h-full">
                <div className = "bg-slate-700 h-fit w-full p-[8px] flex flex-row justify-between items-center">
                    <div className = "flex-1 flex flex-row gap-[4px]">
                        <button className = {titlebarButtonClassName}>
                            <FaPlus size="15px" className = "text-slate-300" />
                        </button>
                        <button className = {titlebarButtonClassName}>
                            <FaAngleDown size="24px" className = "text-slate-300" />
                        </button>
                    </div>
                    <div className = "flex-1 flex flex-row justify-center">
                        <div className = "text-slate-100 whitespace-nowrap">kc@kc-g15:</div>
                    </div>
                    <div className = "flex-1 flex flex-row justify-end">
                        <div className = "flex flex-row gap-[4px]">
                            <button className = {titlebarButtonClassName}>
                                <FaWindowMinimize size="15px" className = "text-slate-300" />
                            </button>
                            <button className = {titlebarButtonClassName}>
                                <FiMinimize size="18px" className = "text-slate-300" />
                            </button>
                            <button className = {titlebarButtonClassName}>
                                <FaPlus size="18px" className = "text-slate-300 rotate-45" />
                            </button>
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
                            8<br />
                            9<br />
                        </div>
                    </div>
                    <div className = "pl-[8px]">
                        Hello, I am Krishnachandran<br />
                        I am a software developer based in Kerala with over 4 years of programming experience and a diverse portfolio<br />
                        I craft captivating and functional digital experiences merging creativity to code to bring ideas to life
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nvim;