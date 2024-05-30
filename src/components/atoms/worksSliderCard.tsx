import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

const WorksSliderCard = () => {
    return (
        <div className = {`bg-slate-200 transiton-all duration-300  ${font.className} size-full`}>
            <div className = "flex md:flex-row flex-col justify-between">
                <div>
                    Placeholder
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </div>
            </div>
        </div>   
    );
}

export default WorksSliderCard;