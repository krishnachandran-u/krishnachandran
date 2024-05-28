import { Urbanist } from "next/font/google";
import WorksSlide from "./worksSlide";

const font = Urbanist({ subsets: ["latin"] });

const Works = () => {
    return (
        <div className = {`xl:max-w-[600px] w-full bg-[#202124] hover:bg-black shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[24px] flex flex-col gap-[24px] p-[24px] ${font.className}`}>
            <div className = "text-white font-bold">
                FEATURED
            </div>     
            <div>
                <WorksSlide />
            </div>
        </div>
    );
}

export default Works;