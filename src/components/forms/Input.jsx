const Input = ({
    type,
    name,
    id,
    placeholder,
    icon: Icon,
    onChange,
    ...props
}) => {
    return (
        <div className="relative">
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className="h-[80px] w-full rounded-lg border-2 px-20 text-[28px] placeholder:text-[#8F8F8F] focus:outline-none"
                onChange={onChange}
                {...props}
            />
            {Icon && (
                <div className="absolute left-6 top-6">
                    <Icon size={"32px"} color={"#8F8F8F"} />
                </div>
            )}
        </div>
    )
}

export default Input
