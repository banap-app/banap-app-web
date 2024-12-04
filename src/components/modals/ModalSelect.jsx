const ModalSelect = () => {
    return (
        <div className="relative">
            <select className="h-[69px] w-full rounded-lg border-2 px-[14px] pt-[25px] text-[18px] font-medium placeholder:text-[#8F8F8F] focus:outline-none">
                <option value="">Kg/Ha para G/Ha</option>
                <option value="">G/Dm³ e Mg/Dm³</option>
                <option value="">G/Kg e Mg/Dm³</option>
                <option value="">G/Kg e T/Ha</option>
                <option value="">Mg/Dm³ e G/Kg</option>
            </select>
            <div className="absolute left-[14px] top-3">
                <p className="text-[14px] text-[#B2BAC9]">Medidas</p>
            </div>
        </div>
    )
}

export default ModalSelect
