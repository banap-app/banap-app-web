import { Banana, ChartNoAxesCombined, Skull } from "lucide-react"
import WhatsappLogo from "../assets/Icons"
import { Wind } from "../assets/Weather"
import { PropertyAsset, PropertyIcon } from "../assets/Clients"
import LineChart from "../components/LineChart"
import BarChart from "../components/BarChart"

const ClientPage = () => {
    return (
        <div className="flex h-full w-full flex-col overflow-auto">
            <div className="flex flex-col gap-10">
                <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-semibold text-banapLight">
                            Sobre seu cliente Lucas
                        </h1>
                        <p className="text-2xl text-banapLight">
                            Dados do cliente, Formas de contato, Propriedades...
                        </p>
                    </div>
                    <button className="flex h-12 w-72 items-center justify-center gap-[10px] rounded-lg bg-banapLight">
                        <WhatsappLogo />
                        <p className="text-xl font-bold text-white">
                            Entrar em contato
                        </p>
                    </button>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex w-full gap-[10px]">
                        <div className="flex h-28 w-1/4 flex-col gap-4 rounded-lg bg-banapLight/10 p-5">
                            <div className="flex gap-1">
                                <Wind size={"14px"} />
                                <p className="text-xs font-medium text-banapLight">
                                    Nitrogênio
                                </p>
                            </div>
                            <p className="text-2xl font-semibold text-banapLight">
                                260Kg/Ha
                            </p>
                        </div>
                        <div className="flex h-28 w-1/4 flex-col gap-4 rounded-lg bg-banapLight/10 p-5">
                            <div className="flex gap-1">
                                <Skull size={"14px"} color="#1EA81E" />
                                <p className="text-xs font-medium text-banapLight">
                                    Fósforo
                                </p>
                            </div>
                            <p className="text-2xl font-semibold text-banapLight">
                                110Kg/Ha
                            </p>
                        </div>
                        <div className="flex h-28 w-1/4 flex-col gap-4 rounded-lg bg-banapLight/10 p-5">
                            <div className="flex gap-1">
                                <Banana size={"14px"} color="#1EA81E" />
                                <p className="text-xs font-medium text-banapLight">
                                    Potássio
                                </p>
                            </div>
                            <p className="text-2xl font-semibold text-banapLight">
                                550Kg/Ha
                            </p>
                        </div>
                        <div className="flex h-28 w-1/4 flex-col gap-4 rounded-lg bg-banapLight/10 p-5">
                            <div className="flex gap-1">
                                <ChartNoAxesCombined
                                    size={"14px"}
                                    color="#1EA81E"
                                />
                                <p className="text-xs font-medium text-banapLight">
                                    Produtividade esperada
                                </p>
                            </div>
                            <p className="text-2xl font-semibold text-banapLight">
                                40%
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full gap-[10px]">
                        <div className="flex h-[557px] w-3/5 items-center justify-center rounded-lg bg-banapLight/10">
                            <LineChart />
                        </div>
                        <div className="flex w-2/5 flex-col gap-[10px]">
                            <div className="flex h-1/2 w-full flex-col items-center justify-center rounded-lg bg-banapLight/10 px-[30px]">
                                <BarChart />
                            </div>
                            <div className="h-1/2 w-full rounded-lg bg-banapLight/10"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold text-banapLight">
                        Propriedades
                    </h1>
                    <p className="text-2xl text-banapLight">
                        Seu cliente pode possuir uma ou mais propriedades
                        gerenciadas...
                    </p>
                </div>
                <div className="h-full w-full">
                    <div className="relative h-44 w-80 rounded-lg bg-banapLight/10 p-6">
                        <div className="absolute right-0 top-0">
                            <PropertyAsset />
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <PropertyIcon />
                            <div className="flex flex-col">
                                <h1 className="font-semibold text-banapLight">
                                    Propriedade 01
                                </h1>
                                <p className="text-xs text-banapLight">
                                    Cajati, São Paulo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientPage
