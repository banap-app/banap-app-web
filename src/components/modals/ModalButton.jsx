const ModalButton = ({ value, onClick, isCancel = false }) => {
    return (
        <button
            onClick={onClick}
            className={`h-[53px] w-full cursor-pointer rounded-[15px] text-[24px] font-bold ${isCancel ? "border border-primary/15 bg-white text-primary" : "bg-primary text-white"}`}
        >
            {value}
        </button>
    )
}

export default ModalButton
