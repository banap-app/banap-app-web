import { UserPlus } from "lucide-react"
import ModalButton from "./ModalButton"
import ModalInput from "./ModalInput"
import ModalText from "./ModalText"

const AggregateModal = () => {
    return (
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
                        <ModalButton value={"Enviar convite"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AggregateModal
