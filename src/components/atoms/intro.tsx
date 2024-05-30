import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

import Nvim from "./nvim";
import Image from "next/image";
import pfp from "../../../public/pfpPlaceholder.png";
import WorksSlider from "./worksSlider";

const Intro = () => {
    return (
        <div className = "max-w-[1250px] w-full bg-white rounded-[24px] flex xl:flex-row xl:justify-between flex-col md:p-[32px] sm:p-[24px] p-[12px] shadow-lg hover:shadow-2xl transition-all duration-300 xl:gap-0 gap-[24px]"> {/* bg-[#202124] */}
            <div className = "flex flex-col justify-center items-center flex-grow gap-[26px]">
                <div style = {{backgroundImage : `url(${pfp.src})`}} className = "sm:w-[380px] sm:h-[380px] w-[260px] h-[260px] bg-cover bg-center"/>
            </div>
            <div className = "xl:w-max w-full flex xl:flex-row flex-col justify-end items-center">
                <Nvim />
            </div>
        </div>
    );
}

export default Intro;