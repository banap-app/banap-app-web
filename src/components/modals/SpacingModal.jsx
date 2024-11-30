import { AlignHorizontalDistributeCenter } from "lucide-react"
import ModalText from "./ModalText"
import ModalInput from "./ModalInput"
import ModalButton from "./ModalButton"
import { useState } from "react"
import ModalResult from "./ModalResult"

const SpacingModal = () => {
    const [view, setView] = useState(0)

    return (
        <div className="flex flex-col gap-[60px]">
            <ModalText
                title={"Espaçamento simples"}
                subtitle={
                    "Com essas ferramentas esperamos  facilitar ainda mais sua vida! Simplificando e reunindo tudo o que você precisa em um só lugar!"
                }
                icon={AlignHorizontalDistributeCenter}
            />
            {view === 0 ? (
                <form>
                    <div className="flex flex-col gap-[20px]">
                        <ModalInput
                            type={"text"}
                            name={""}
                            id={""}
                            placeholder={"Entre plantas"}
                            required
                        />
                        <ModalInput
                            type={"text"}
                            name={""}
                            id={""}
                            placeholder={"Entre linhas"}
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
                        icon={AlignHorizontalDistributeCenter}
                        text={"Espaçamento simples"}
                        result={"2.500 Pl/H"}
                    />
                    <ModalButton value={"Feito"} />
                </>
            )}
        </div>
    )
}

export default SpacingModal
