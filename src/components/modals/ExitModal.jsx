import { PenLine } from "lucide-react"
import ModalButton from "./ModalButton"
import ModalText from "./ModalText"

const ExitModal = ({ navigate }) => {
    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col">
                <ModalText
                    title={"Deseja mesmo sair?"}
                    subtitle={
                        "Tem certeza que deseja sair? Espero que possamos nos ver novamente em breve"
                    }
                    icon={PenLine}
                />
            </div>
            <ModalButton value={"Sair"} onClick={logout} />
        </div>
    )
}

export default ExitModal
