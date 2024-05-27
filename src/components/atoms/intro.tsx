import Nvim from "./nvim";
import Image from "next/image";
import pfp from "../../../public/pfpPlaceholder.png";

const Intro = () => {
    return (
        <div className = "max-w-[1250px] w-full bg-white rounded-[24px] flex xl:flex-row flex-col md:p-[32px] sm:p-[24px] p-[12px] shadow-lg hover:shadow-2xl transition-all duration-300 xl:gap-0 gap-[24px]"> {/* bg-[#202124] */}
            <div className = "flex flex-row justify-center items-center">
                <div style = {{backgroundImage : `url(${pfp.src})`}} className = "w-[300px] h-[300px] bg-cover bg-center"/>
            </div>
            <div className = "w-full flex xl:flex-row flex-col justify-end items-center">
                <Nvim />
            </div>
        </div>
    );
}

export default Intro;