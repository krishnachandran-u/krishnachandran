import Nvim from "./nvim";

const Intro = () => {
    return (
        <div className = "max-w-[1250px] w-full bg-white rounded-[24px] flex flex-row md:p-[32px] sm:p-[24px] p-[12px] shadow-lg hover:shadow-2xl transition-all duration-300"> {/* bg-[#202124] */}
            <div className = "w-full">
                <Nvim />
            </div>
            {/*
            <div className = "bg-white p-[16px] max-w-[750px] w-full rounded-[18px]">
                <Nvim />
            </div>
    */}
            <div>

            </div>
        </div>
    );
}

export default Intro;