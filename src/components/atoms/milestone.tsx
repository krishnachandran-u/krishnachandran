import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

const Milestone = () => {
    const data = [
        {
            "heading": "Oronium",
            "timeline": "Dec 2023 - Mar 2024",
            "subheading": "Software Engineer Intern",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
            "type": "work"
        },
        {
            "heading": "College of Engineering, Trivandrum",
            "timeline": "2022 - Present",
            "subheading": "B.Tech - Computer Science and Engineering",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
            "type": "study"
        },
    ];

    return (
        <div className = {`max-w-[1250px] w-full h-full shadow-lg hover:shadow-2xl rounded-[24px] bg-white transition-all duration-300 p-[24px] ${font.className}`}>
            <div className = "w-full h-full flex flex-col">
                {data.map((item, index) => (
                    <div key = {index} className = "flex flex-col gap-[12px]">
                        <div className = {`h-[64px] w-[2px] bg-black ${index === 0? "hidden" : "block"}`} />
                        <div className = "flex flex-row justify-between items-center gap-[12px]">
                            <div className = "lg:text-3xl text-2xl font-semibold whitespace-nowrap">{item.heading}</div>
                            <div className="w-full h-[2px] bg-black" />
                            <div className = "lg:text-xl text-lg whitespace-nowrap">{item.timeline}</div>
                        </div>
                        <div className = "flex flex-row gap-[24px]">
                            <div className = {`w-[2px] bg-black `} />
                            <div className = "flex flex-col gap-[12px] w-fit"> 
                                <div className = "lg:text-2xl text-xl">{item.subheading}</div>
                                <div className = "lg:text-lg text-md">{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Milestone;