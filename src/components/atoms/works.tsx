import { Urbanist } from "next/font/google";
import WorksTile from "./worksTile";

const font = Urbanist({ subsets: ["latin"] });

import { WorksTileProps } from "@/types/types";

const Works = (
    {item}:
    {item: WorksTileProps}
) => {
    return (
        <div className = {`xl:max-w-[600px] w-full bg-[#202124] hover:bg-black shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[24px] flex flex-col gap-[24px] p-[24px] h-full ${font.className}`}>
            <div className = "text-white font-bold">
                FEATURED
            </div>     
            <div>
                <WorksTile item = {item}/>
            </div>
        </div>
    );
}

export default Works;