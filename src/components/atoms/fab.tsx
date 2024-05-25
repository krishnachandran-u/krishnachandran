import { BioRhyme } from "next/font/google";

const biorhyme = BioRhyme({ subsets: ["latin"] });

const Fab = () => {
    return (
        <div className = {`bg-[#252525] w-full flex flex-col justify-between items-center ${biorhyme.className}`}>
            <div className = "w-full md:h-[10px] h-[5px] flex flex-row">
                <div className = "flex-1 w-full flex flex-row">
                    <div className = "flex-1 bg-pink-600"></div>
                    <div className = "flex-1 bg-blue-800" />
                </div>
                <div className = "flex-1  bg-yellow-400" />
            </div> 
            <div className = "w-full flex flex-row justify-between xl:items-center md:px-[32px] px-[16px] py-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px] sm:text-[18px]">
                <div className = "font-semibold text-slate-300">
                    Got a project brewing in your mind?
                </div>
                <div>
                    <button className = "font-extrabold underline md:underline-offset-8 underline-offset-4 text-pink-400">
                        Get in touch!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Fab;