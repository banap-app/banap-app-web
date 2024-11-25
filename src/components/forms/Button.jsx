const Button = ({ value }) => {
    return (
        <input
            type="submit"
            value={value}
            className="h-[58px] w-full cursor-pointer rounded-[48px] bg-primary text-[28px] text-white"
        />
    )
}

export default Button
