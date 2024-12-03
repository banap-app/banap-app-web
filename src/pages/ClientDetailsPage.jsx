import { ChartLine, Tractor } from "lucide-react"
import NPK from "../components/common/NPK"
import TotalProductionChart from "../components/charts/TotalProductionChart"
import MonthlyProductionChart from "../components/charts/MonthlyProductionChart"
import { PropertyVector } from "../assets/CardVectors"

const ClientDetailsPage = () => {
    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                                <h1 className="title text-primary">
                                    Sobre seu cliente Lucas
                                </h1>
                                <p className="sub-title text-primary">
                                    Dados do cliente, Formas de contato,
                                    Propriedades...
                                </p>
                            </div>
                            <div className="flex h-[48px] w-[316px] cursor-pointer items-center justify-center gap-[10px] rounded-lg bg-primary">
                                <p className="text-[20px] font-bold text-white">
                                    Entrar em contato
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex w-full flex-col gap-[10px]">
                        <NPK />
                        <div className="flex w-full gap-[10px]">
                            <div className="h-[557px] w-3/5 rounded-xl bg-primary/10 p-[34px]">
                                <div className="flex h-full w-full items-center justify-center">
                                    <TotalProductionChart />
                                </div>
                            </div>
                            <div className="flex w-2/5 flex-col gap-[10px]">
                                <div className="h-1/2 w-full rounded-xl bg-primary/10 p-[30px]">
                                    <div className="flex h-full w-full flex-col gap-5">
                                        <div className="flex items-center gap-[5px]">
                                            <ChartLine
                                                size={"14px"}
                                                color="#1EA81E"
                                            />
                                            <p className="text-[12px] font-bold text-primary">
                                                Produtividade mensal
                                            </p>
                                        </div>
                                        <div className="flex h-full w-full items-center justify-center">
                                            <MonthlyProductionChart />
                                        </div>
                                        <p className="text-[12px] text-primary">
                                            Ultimos 12 meses
                                        </p>
                                    </div>
                                </div>
                                <div className="h-1/2 w-full rounded-xl bg-primary/10"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="title text-primary">Propriedades</h2>
                            <p className="sub-title text-primary">
                                Seu cliente pode possuir uma ou mais
                                propriedades gerenciadas...
                            </p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <div className="flex-shrink-0">
                                <div className="relative h-[170px] w-[320px] rounded-lg bg-primary/10 p-[25px]">
                                    <div className="absolute right-0 top-0">
                                        <PropertyVector />
                                    </div>
                                    <div className="flex items-center gap-[10px]">
                                        <Tractor
                                            size={"34px"}
                                            color="#1EA81E"
                                        />
                                        <div>
                                            <p className="text-[16px] font-semibold text-primary">
                                                Propriedade 01
                                            </p>
                                            <p className="text-[12px] text-primary">
                                                Cajati, São Paulo
                                            </p>
                                        </div>
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

export default ClientDetailsPage
