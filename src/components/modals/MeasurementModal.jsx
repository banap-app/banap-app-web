import { PencilRuler } from "lucide-react"
import ModalText from "./ModalText"
import { useState } from "react"
import ModalInput from "./ModalInput"
import ModalResult from "./ModalResult"
import ModalButton from "./ModalButton"

const MeasurementModal = () => {
    const [view, setView] = useState(0)

    return (
        <div className="flex flex-col gap-[60px]">
            <ModalText
                title={"Medidas e conversões"}
                subtitle={
                    "Com essas ferramentas esperamos  facilitar ainda mais sua vida! Simplificando e reunindo tudo o que você precisa em um só lugar! "
                }
                icon={PencilRuler}
            />
            {view === 0 ? (
                <form>
                    <div className="flex flex-col gap-[20px]">
                        <ModalInput
                            type={"text"}
                            name={""}
                            id={""}
                            placeholder={"Medidas"}
                            required
                        />
                        <ModalInput
                            type={"text"}
                            name={""}
                            id={""}
                            placeholder={"Kg/Ha"}
                            required
                        />
                    </div>
                    <div className="mt-[60px]">
                        <ModalButton
                            value={"Calcular"}
                            onClick={() => setView(1)}
                        />
                    </div>
                </form>
            ) : (
                <>
                    <ModalResult
                        icon={PencilRuler}
                        text={"Medida Kg/Ha convertida para G/Ha"}
                        result={"2.500 G/Ha"}
                    />
                    <ModalButton value={"Feito"} />
                </>
            )}
        </div>
    )
}

export default MeasurementModal
