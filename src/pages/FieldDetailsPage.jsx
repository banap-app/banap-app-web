import { useEffect, useState } from "react"
import NPKChart from "../components/charts/NPKChart"
import NPK from "../components/common/NPK"
import customFetch from "../utils/api"
import {
    FileText,
    Layers3,
    PenLine,
    Plus,
    Sprout,
    TrendingUp,
} from "lucide-react"
import { useModal } from "../context/ModalContext"

const FieldDetailsPage = () => {
    const [fieldData, setFieldData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await customFetch(
                    import.meta.env.VITE_APP_API_URL,
                    "/get_last_data_of_esp",
                    "GET",
                    false,
                    null
                )

                const parsedData = JSON.parse(data.body)

                if (parsedData.success) {
                    setFieldData(parsedData.data)
                    console.log("Data retrieved successfully:", parsedData.data)
                } else {
                    console.error("Error retrieving data:", parsedData.message)
                }
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()

        const interval = setInterval(fetchData, 10000)

        return () => clearInterval(interval)
    }, [])

    const { openModal } = useModal()

    const handleOpenModal = (modal) => {
        openModal(modal)
    }

    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="title text-primary">Talhão 01</h1>
                            <p className="sub-title text-primary">
                                Gráficos, Dados do talhão, Análises e muito
                                mais...
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex w-full flex-col gap-[10px]">
                        <NPK />
                        <div className="flex h-[557px] w-full items-center justify-center rounded-lg bg-primary/10 p-[34px]">
                            <NPKChart fieldData={fieldData} />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="title text-primary">
                                Dados do Talhão
                            </h1>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex h-[255px] w-full gap-5">
                                <div className="h-full w-4/5 rounded-lg bg-primary/10"></div>
                                <div className="flex w-1/5 flex-col gap-5">
                                    <div className="h-1/2 w-full rounded-lg bg-primary/10 p-5">
                                        <div className="flex h-full flex-col justify-between">
                                            <div className="flex items-center gap-[5px]">
                                                <Sprout
                                                    size={"20px"}
                                                    color="#1EA81E"
                                                />
                                                <p className="text-[16px] font-semibold text-primary">
                                                    Cultura
                                                </p>
                                            </div>

                                            <p className="text-[12px] font-medium text-primary">
                                                A cultura plantada nesse talhão
                                                é a Banana nanica.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-1/2 w-full rounded-lg bg-primary/10 p-5">
                                        <div className="flex h-full flex-col justify-between">
                                            <div className="flex items-center gap-[5px]">
                                                <Layers3
                                                    size={"20px"}
                                                    color="#1EA81E"
                                                />
                                                <p className="text-[16px] font-semibold text-primary">
                                                    Quantidade
                                                </p>
                                            </div>
                                            <p className="text-[12px] font-medium text-primary">
                                                Baseado nos calcúlos realizados
                                                a quantidade de plantas que
                                                podem ser plantadas são 10.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[95px] w-full rounded-l-xl bg-primary/10 p-5">
                                <div className="flex h-full flex-col justify-between">
                                    <div className="flex items-center gap-[5px]">
                                        <FileText
                                            size={"20px"}
                                            color="#1EA81E"
                                        />
                                        <p className="text-[16px] font-semibold text-primary">
                                            Descrição
                                        </p>
                                    </div>
                                    <p className="text-[12px] font-medium text-primary">
                                        Esse talhão está situado próximo à cerca
                                        leste da fazenda, marcando uma das
                                        extremidades da propriedade. Ele fica ao
                                        lado de outros talhões de banana prata.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                                <h1 className="title text-primary">
                                    Observações
                                </h1>
                                <p className="sub-title text-primary">
                                    Observações que você realizou no talhão
                                    desse cliente...
                                </p>
                            </div>
                            <div
                                onClick={() => handleOpenModal("observation")}
                                className="flex h-[48px] w-[257px] cursor-pointer items-center justify-center gap-[10px] rounded-lg bg-primary"
                            >
                                <Plus size={"24px"} color={"#FFFFFF"} />
                                <p className="text-[20px] font-bold text-white">
                                    Fazer observação
                                </p>
                            </div>
                        </div>
                        <div className="h-[145px] w-[385px] rounded-lg bg-primary/10 p-5">
                            <div className="flex h-full flex-col justify-between">
                                <div className="flex items-center gap-[5px]">
                                    <PenLine size={"20px"} color="#1EA81E" />
                                    <p className="text-[16px] font-semibold text-primary">
                                        Titulo da observação
                                    </p>
                                </div>
                                <p className="text-[12px] font-medium text-primary">
                                    Adubação no talhão 1 realizada em
                                    20/05/2024, verificar se teve efeitos na
                                    proxima análise.
                                </p>
                                <p className="text-[12px] font-bold text-[#434961]/30">
                                    10 Maio 2024 ás 17:54
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                                <h1 className="title text-primary">
                                    Análises realizadas
                                </h1>
                                <p className="sub-title text-primary">
                                    Análises realizadas referente a esse talhão
                                </p>
                            </div>
                            <div
                                onClick={() => handleOpenModal("analysis")}
                                className="flex h-[48px] w-[211px] cursor-pointer items-center justify-center gap-[10px] rounded-lg bg-primary"
                            >
                                <Plus size={"24px"} color={"#FFFFFF"} />
                                <p className="text-[20px] font-bold text-white">
                                    Fazer análise
                                </p>
                            </div>
                        </div>
                        <div className="h-[145px] w-[385px] rounded-lg bg-primary/10 p-5">
                            <div className="flex h-full flex-col justify-between">
                                <div className="flex items-center gap-[10px]">
                                    <TrendingUp size={"34px"} color="#1EA81E" />
                                    <div className="flex flex-col">
                                        <p className="text-[16px] font-semibold text-primary">
                                            Análise 01
                                        </p>
                                        <p className="text-[12px] font-medium text-primary">
                                            Calcúlo de Calagem
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FieldDetailsPage
