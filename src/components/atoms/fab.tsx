import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

const Fab = () => {
    return (
        <div className = {`p-[16px] ${font.className}`}>
            <div className = "rounded-[16px] border-[1px] shadow-2xl bg-white">
                <div className = "w-full flex flex-row justify-between xl:items-center md:px-[32px] px-[16px] py-[16px] md:text-[24px] sm:text-[18px] font-semibold">
                    <div>
                        Got an idea brewing in your mind? 
                    </div>
                    <button className = "bg-[#5551ff] text-white py-[10px] px-[20px] rounded-[12px] font-extrabold">
                        Get in touch!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Fab;