const ModalResult = ({ icon: Icon, text, result }) => {
    return (
        <div className="h-[104px] w-full rounded-[10px] bg-primary px-[20px] py-[15px]">
            <div className="flex h-full flex-col justify-between">
                <div className="flex gap-[5px]">
                    <Icon size={"20px"} color={"#FFFFFF"} />
                    <p className="text-[16px] text-white">{text}</p>
                </div>
                <p className="text-[32px] font-bold text-white">{result}</p>
            </div>
        </div>
    )
}

export default ModalResult
