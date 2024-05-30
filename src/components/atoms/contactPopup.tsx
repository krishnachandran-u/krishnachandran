import { IoIosClose } from "react-icons/io";

const ContactPopup = (
    {closePopup}:
    {closePopup: () => void}
) => {
    return (
        <div className = "fixed w-screen h-screen flex justify-center items-center top-0 left-0">
            <div className="w-[300px] h-[300px] bg-white shadow-2xl z-[100] transition-all duration-300 rounded-[32px] flex flex-col justify-between items-center p-[16px] gap-[8px]">
                <button 
                    onClick = {closePopup}
                    className = "flex flex-row justify-end items-center w-full"
                >
                    <IoIosClose className = "text-[32px] text-[#202124] hover:text-black transition-all duration-300 cursor-pointer" />
                </button>
            </div>
        </div>
    );
}

export default ContactPopup;