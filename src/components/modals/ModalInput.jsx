const ModalInput = ({ type, name, id, placeholder, ...props }) => {
    return (
        <div className="relative">
            <input
                type={type}
                name={name}
                id={id}
                className="h-[69px] w-full rounded-lg border-2 px-[14px] pt-[35px] text-[18px] font-medium placeholder:text-[#8F8F8F] focus:outline-none"
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

export default ModalInput
