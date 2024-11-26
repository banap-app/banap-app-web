import { PenLine } from "lucide-react"
import ModalLayout from "./ModalLayout"
import CancelButton from "./CancelButton"
import ModalButton from "./ModalButton"
import ModalText from "./ModalText"

const ExitModal = () => {
    return (
        <ModalLayout>
            <div className="flex flex-col">
                <ModalText
                    title={"Deseja mesmo sair?"}
                    subtitle={
                        "Tem certeza que deseja sair? Espero que possamos nos ver novamente em breve"
                    }
                    icon={PenLine}
                />
            </div>
            <div className="flex flex-col gap-3">
                <ModalButton value={"Sair"} />
                <CancelButton />
            </div>
        </ModalLayout>
    )
}

export default ExitModal
