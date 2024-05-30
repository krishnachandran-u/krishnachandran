import { Urbanist } from "next/font/google";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const font = Urbanist({ subsets: ["latin"] });

const WorksSwiperCard = () => {
    const [arrowClassName, setArrowClassName] = useState("");

    return (
        <div className = {`bg-white transiton-all duration-300  ${font.className} size-full rounded-[18px] h-full p-[24px] group`}>
            <div className = "flex flex-row justify-between h-full">
                <div className = "flex flex-col sm:gap-[32px] gap-[20px] h-full">
                    <div className = "w-fit font-semibold sm:text-5xl text-3xl">
                        Placeholder
                    </div>
                    <div className = "lg:text-[24px] sm:text-[20px] xl:w-[600px] md:w-[375px] sm:w-[300px] w-[150px] text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </div>
                </div>
                <div className = "flex justify-center items-center w-full">
                    <button 
                        className = "rounded-[50%] border-4 border-black sm:p-[32px] p-[16px] group-hover:bg-black transition-all duration-300"
                        onMouseEnter={() => setArrowClassName("translate-x-1 -translate-y-1")}
                        onMouseLeave={() => setArrowClassName("")}
                    >
                        <BsArrowUpRight color = "" className = {`sm:size-[96px] size-[48px] text-black group-hover:text-white transition-all duration-300 ${arrowClassName}`} />
                    </button>
                </div> 
            </div>
        </div>   
    );
}

export default WorksSwiperCard;