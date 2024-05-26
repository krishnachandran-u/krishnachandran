import { FaPlus } from "react-icons/fa";

const Nvim = () => {
    return (
        <div className = "w-full bg-slate-700 rounded-[12px] max-w-[700px] min-h-[100px] p-[2px] h-full">
            <div className = "flex flex-col justify-between w-full rounded-[10px] overflow-hidden h-full">
                <div className = "bg-slate-700 h-fit w-full p-[8px]">
                    <button 
                        className = "size-[30px] bg-slate-500 flex justify-center items-center rounded-[8px] transition-all overflow-hidden hover:-translate-y-1 duration-300"
                    >
                        <FaPlus size="15px" className = "text-slate-700" />
                    </button>
                </div>
                <div className = "h-full rounded-[8px] w-full bg-[#1a1b26]">

                </div>
            </div>
        </div>
    )
}

export default Nvim;