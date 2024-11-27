const ModalTextArea = ({ name, id, placeholder, ...props }) => {
    return (
        <div className="relative">
            <textarea
                name={name}
                id={id}
                className="no-scrollbar h-[240px] w-full resize-none rounded-lg border-2 px-[14px] pt-[26px] text-[18px] font-medium placeholder:text-[#8F8F8F] focus:outline-none"
                maxLength={343}
                {...props}
            />
            {placeholder && (
                <div className="absolute left-[14px] top-3">
                    <p className="text-[14px] text-[#B2BAC9]">{placeholder}</p>
                </div>
            )}
        </div>
    )
}

export default ModalTextArea
