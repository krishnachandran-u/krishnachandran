import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

const WorksSliderCard = () => {
    return (
        <div className = {`bg-white transiton-all duration-300  ${font.className} size-full rounded-[18px] h-full p-[24px]`}>
            <div className = "flex md:flex-row flex-col justify-between h-full">
                <div className = "flex flex-col sm:gap-[32px] gap-[20px] h-full">
                    <div className = "w-fit font-semibold sm:text-5xl text-3xl">
                        Placeholder
                    </div>
                    <div className = "lg:text-[24px] sm:text-[20px] lg:w-[600px] md:w-[400px] sm:w-[300px] w-[150px] text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </div>
                </div>
                <div>
                </div> 
            </div>
        </div>   
    );
}

export default WorksSliderCard;