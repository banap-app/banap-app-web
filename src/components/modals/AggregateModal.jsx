import { UserPlus } from "lucide-react"
import CancelButton from "./CancelButton"
import ModalButton from "./ModalButton"
import ModalInput from "./ModalInput"
import ModelLayout from "./ModalLayout"
import ModalText from "./ModalText"

const AggregateModal = () => {
    return (
        <ModelLayout>
            <div className="flex flex-col">
                <div className="flex flex-col gap-[60px]">
                    <div>
                        <ModalText
                            title={"Agregando um novo cliente"}
                            subtitle={
                                "Para agregar um novo cliente você precisará informar o e-mail cadastrado!"
                            }
                            icon={UserPlus}
                        />
                    </div>
                    <form>
                        <div className="flex flex-col gap-[60px]">
                            <ModalInput
                                type={"email"}
                                name={"email"}
                                id={"email"}
                                placeholder={"E-mail cliente"}
                                required
                            />
                            <div className="flex flex-col gap-3">
                                <ModalButton value={"Enviar convite"} />
                                <CancelButton />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </ModelLayout>
    )
}

export default AggregateModal
