const ModalText = ({ title, subtitle, icon: Icon }) => {
    return (
        <div>
            <div className="flex items-center gap-[10px]">
                {Icon && <Icon size={"39px"} color="#1EA81E" />}
                <h1 className="title text-primary">{title}</h1>
            </div>
            <p className="sub-title text-justify text-primary">{subtitle}</p>
        </div>
    )
}

export default ModalText
