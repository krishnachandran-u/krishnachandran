import { IoIosClose } from "react-icons/io";

const ContactPopup = (
    {closePopup}:
    {closePopup: () => void}
) => {
    return (
        <div className = "fixed w-screen h-screen flex justify-center items-center top-0 left-0 bg-opacity-50 bg-black">
            <div className="w-[300px] h-[300px] bg-white shadow-2xl z-[100] rounded-[32px] flex flex-col justify-between items-center p-[16px] gap-[8px] shadow-black">
                <button 
                    className = "flex flex-row justify-end items-center w-full"
                >
                    <IoIosClose  
                        onClick = {closePopup}
                        className = "text-[48px] text-[#202124] hover:text-black transition-all duration-300 cursor-pointer w-fit"
                    />
                </button>
            </div>
        </div>
    );
}

export default ContactPopup;