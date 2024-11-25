import {
    AlignHorizontalDistributeCenter,
    PencilRuler,
    TrendingUp,
    Wrench,
} from "lucide-react"

const ToolsPage = () => {
    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="title text-primary">Ferramentas</h1>
                            <p className="sub-title text-primary">
                                Funcionalidades do sistema que lhe auxiliarão na
                                utilização do sistema...
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <div className="h-[151px] w-[320px] rounded-lg bg-primary/10 p-[25px]">
                                <div className="flex h-full w-full flex-col justify-between">
                                    <div className="flex items-center gap-[10px]">
                                        <Wrench size={"34px"} color="#1EA81E" />
                                        <div>
                                            <p className="text-[16px] font-semibold text-primary">
                                                Espaçamento simples
                                            </p>
                                            <p className="text-[12px] text-primary">
                                                Calculando medidas em Metros
                                            </p>
                                        </div>
                                    </div>
                                    <AlignHorizontalDistributeCenter
                                        size={"24px"}
                                        color="#1EA81E"
                                    />
                                </div>
                            </div>
                            <div className="h-[151px] w-[320px] rounded-lg bg-primary/10 p-[25px]">
                                <div className="flex h-full w-full flex-col justify-between">
                                    <div className="flex items-center gap-[10px]">
                                        <Wrench size={"34px"} color="#1EA81E" />
                                        <div>
                                            <p className="text-[16px] font-semibold text-primary">
                                                Medidas e conversões
                                            </p>
                                            <p className="text-[12px] text-primary">
                                                Convertendo valores
                                            </p>
                                        </div>
                                    </div>
                                    <PencilRuler
                                        size={"24px"}
                                        color="#1EA81E"
                                    />
                                </div>
                            </div>
                            <div className="h-[151px] w-[320px] rounded-lg bg-primary/10 p-[25px]">
                                <div className="flex h-full w-full flex-col justify-between">
                                    <div className="flex items-center gap-[10px]">
                                        <Wrench size={"34px"} color="#1EA81E" />
                                        <div>
                                            <p className="text-[16px] font-semibold text-primary">
                                                Escanear análise
                                            </p>
                                            <p className="text-[12px] text-primary">
                                                Escanando análises
                                            </p>
                                        </div>
                                    </div>
                                    <TrendingUp size={"24px"} color="#1EA81E" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ToolsPage
