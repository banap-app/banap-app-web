import ModalText from "./ModalText"
import ModalInput from "./ModalInput"
import ModalButton from "./ModalButton"
import { useState } from "react"
import ModalResult from "./ModalResult"
import { Mountain } from "lucide-react"

const AnalysisModal = () => {
    const [view, setView] = useState(0)

    const modalContent = [
        {
            title: "Recomendação de Adubação",
            subtitle:
                "Precisamos que nos informe o nível de nutrientes do solo do cliente! Depois, nos diga a produtividade que o mesmo deseja obter...",
        },
        {
            title: "Recomendação de Adubação",
            subtitle:
                "Quantidade de nitrogênio, fosfóro e potásssio necessário, para que se obtenha a produtividade esperada, é de:",
        },
        {
            title: "Cálculo de Calagem do Solo",
            subtitle:
                "Calcula a quantidade de calcário necessária a ser aplicada no solo, com o objetivo de corrigir a acidez e alcançar a saturação desejada de bases.",
        },
        {
            title: "Cálculo de Calagem do Solo",
            subtitle:
                "Quantidade de calcário necessária, para que se obtenha a saturação de bases desejada, é de:",
        },
    ]

    return (
        <div
            className={`flex flex-col ${view === 3 ? "gap-[146px]" : "gap-[60px]"}`}
        >
            <ModalText
                title={modalContent[view].title}
                subtitle={modalContent[view].subtitle}
            />
            {view === 0 && (
                <form>
                    <div className="flex flex-col gap-[20px]">
                        <ModalInput placeholder={"Fósforo (P)"} />
                        <ModalInput placeholder={"Potássio (K)"} />
                        <ModalInput placeholder={"Produtividade esperada"} />
                    </div>
                    <div className="mt-[60px]">
                        <ModalButton
                            value={"Calcular"}
                            onClick={() => setView(1)}
                        />
                    </div>
                </form>
            )}
            {view === 1 && (
                <>
                    <div className="flex w-full flex-col gap-[15px]">
                        <div className="flex w-full gap-[15px]">
                            <div className="w-1/2">
                                <ModalResult
                                    text={"Nitrogênio"}
                                    result={"260Kg/Ha"}
                                />
                            </div>
                            <div className="w-1/2">
                                <ModalResult
                                    text={"Fósforo"}
                                    result={"110Kg/Ha"}
                                />
                            </div>
                        </div>
                        <ModalResult text={"Potássio"} result={"550Kg/Ha"} />
                    </div>
                    <ModalButton
                        value={"Registrar cálculo"}
                        onClick={() => setView(2)}
                    />
                </>
            )}
            {view === 2 && (
                <form>
                    <div className="flex flex-col gap-[20px]">
                        <ModalInput
                            placeholder={"Saturação de Bases Atual (V%)"}
                        />
                        <ModalInput placeholder={"C.T.C"} />
                        <ModalInput placeholder={"P.R.N.T"} />
                    </div>
                    <div className="mt-[60px]">
                        <ModalButton
                            value={"Calcular"}
                            onClick={() => setView(3)}
                        />
                    </div>
                </form>
            )}
            {view === 3 && (
                <>
                    <div className="flex w-full items-center justify-center">
                        <div className="w-[218px]">
                            <ModalResult
                                icon={Mountain}
                                text={"Cálcario"}
                                result={"550Kg/Ha"}
                            />
                        </div>
                    </div>
                    <ModalButton value={"Registrar cálculo"} />
                </>
            )}
        </div>
    )
}

export default AnalysisModal
