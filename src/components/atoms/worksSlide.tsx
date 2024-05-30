import sampleImg from "../../../public/worksampleimg.png"
import Image from "next/image";

const WorksSlide = () => {
    return (
        <div className = "size-full flex flex-col gap-[24px] text-white group hover:cursor-pointer">
            <div className = "text-5xl font-semibold">Placeholder</div>
            <div className = "lg:text-[24px] sm:text-[20px] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
            <div className = "flex justify-center items-center sm:max-w-[300px] sm:max-h-[300px] max-w-[250px] max-h-[250px] size-full overflow-hidden">
                <Image src = {sampleImg} alt = "Sample Image" className="group-hover:scale-110 transition-all duration-300 -translate-x-[2px]" />
            </div>
            <button className = "border-white border-[2px] font-bold text-[20px] w-fit px-[80px] py-[8px] rounded-[32px] group-hover:bg-white group-hover:text-black  transition-all duration-300">
                Check it out!
            </button>
        </div>
    );
}

export default WorksSlide;