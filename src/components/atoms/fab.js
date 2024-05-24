const Fab = () => {
    return (
        <div className = "bg-[#252525] w-full flex flex-col justify-between items-center">
            <div className = "w-full h-[10px] bg-blue-800">
            </div> 
            <div className = "w-full flex flex-row justify-between items-center p-[32px] h-[80px]">
                <div className = "text-white font-semibold text-[40px]">
                    Got a project brewing in your mind?
                </div>
                <div>
                    <button className = "font-extrabold text-white text-[40px] underline underline-offset-4">
                        Get in touch!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Fab;