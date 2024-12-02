import { PenLine } from "lucide-react"
import ModalText from "./ModalText"
import ModalInput from "./ModalInput"
import ModalTextArea from "./ModalTextArea"
import ModalButton from "./ModalButton"

const ObservationModal = () => {
    return (
        <div className="flex flex-col gap-[60px]">
            <ModalText
                title={"Fazendo uma observação"}
                subtitle={
                    "A observação pode ser visualizada pelo produtor. Elas são uma das formas de contato entre o cliente e você!"
                }
                icon={PenLine}
            />
            <form>
                <div className="flex flex-col gap-5">
                    <ModalInput
                        type={"text"}
                        name={"title"}
                        id={"title"}
                        placeholder={"Titulo da observação"}
                        required
                    />
                    <ModalTextArea
                        name={"description"}
                        id={"description"}
                        placeholder={"Observação"}
                    />
                </div>
                <div className="mt-[60px]">
                    <ModalButton value={"Realizar"} />
                </div>
            </form>
        </div>
    )
}

export default ObservationModal
