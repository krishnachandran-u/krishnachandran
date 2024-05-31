import { Ubuntu_Mono } from "next/font/google";
import { IoIosClose } from "react-icons/io";

const font = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });

import { SocialsData } from "@/constants/socialsData";
import Link from "next/link";

const ContactPopup = (
    {closePopup}:
    {closePopup: () => void}
) => {
    return (
        <div className="fixed w-screen h-screen flex justify-center items-center top-0 left-0 bg-opacity-50 bg-slate-800">
            <div className="w-[300px] h-[300px] bg-white shadow-2xl z-[100] rounded-[32px] flex flex-col justify-between items-center p-[16px] gap-[8px] shadow-black">
                <button className="flex flex-row justify-end items-center w-full">
                    <IoIosClose
                        onClick={closePopup}
                        className="text-[48px] text-[#202124] hover:text-black transition-all duration-300 cursor-pointer w-fit"
                    />
                </button>
                <div
                    className={`flex flex-col justify-between items-center ${font.className} w-full h-full text-2xl font-bold`}
                >
                    {Object.entries(SocialsData).map(([key, value]) => (
                        <Link key={key} href={value} rel="noopener noreferrer" target="_blank">
                            <button className="underline underline-offset-2 text-blue-900">
                                {key} ↗
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactPopup;