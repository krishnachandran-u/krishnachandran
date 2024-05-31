import { Urbanist } from "next/font/google";

import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

const font = Urbanist({ subsets: ["latin"] });

import { SocialsData } from "@/constants/socialsData";
import Link from "next/link";

import cursor from "../../../public/cursors/focus.png"

import FadeInWhenVisible from "../animations/FadeInWhenVisible";

const Contact = () => {
    return (
        <div className={`bg-[#202124] hover:bg-black transition-all duration-300 max-w-[1250px] w-full shadow-lg hover:shadow-2xl sm:p-[64px] p-[32px] rounded-[24px] flex flex-col gap-[96px] group ${font.className}`}>
            <div className = "flex flex-col justify-between items-center text-white gap-[64px]">
                <div className = "flex-1 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl justify-center items-center text-center">
                    Let&apos;s talk about the next big thing!
                </div>
                <div className = "flex-1 flex justify-center items-center">
                    <Link href = {SocialsData.mail} rel="noopener noreferrer" target="_blank">
                        <FadeInWhenVisible>
                            <button className = "border-white border-[2px] font-bold w-full sm:px-[80px] sm:py-[32px] px-[64px] py-[24px] rounded-[96px] transition-all duration-300 sm:text-7xl text-[48px] group-hover:bg-white group-hover:text-black hover:scale-110 flex justify-center items-center">
                                mailto:
                            </button>
                        </FadeInWhenVisible>
                    </Link>
                </div>
            </div>
            <div className = "flex flex-row justify-between items-center">
                <Link 
                    href={SocialsData.x} rel="noopener noreferrer" target="_blank"
                    style = {{cursor: `url(${cursor.src}), auto`}}
                >
                    <BsTwitterX className = "text-white  md:text-3xl text-2xl" />
                </Link>
                <Link 
                    href={SocialsData.instagram} rel="noopener noreferrer" target="_blank"
                    style = {{cursor: `url(${cursor.src}), auto`}}
                >
                    <FaInstagram className = "text-white md:text-4xl text-3xl" />
                </Link>
                <Link
                    href={SocialsData.github} rel="noopener noreferrer" target="_blank"
                    style = {{cursor: `url(${cursor.src}), auto`}}
                >
                    <IoLogoGithub className = "text-white md:text-4xl text-3xl" />
                </Link>
                <Link
                    href={SocialsData.linkedin} rel="noopener noreferrer" target="_blank"
                    style = {{cursor: `url(${cursor.src}), auto`}}
                >
                    <CiLinkedin className = "text-white md:text-4xl text-3xl" />
                </Link>
            </div>
        </div>
    )
};

export default Contact;