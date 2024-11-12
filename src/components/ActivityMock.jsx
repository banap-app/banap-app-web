import { Clock } from "lucide-react"
import { RecentActivity, LastClient } from "../assets/Activity"

const ActivityMock = () => {
    return (
        <div className="flex h-full w-full flex-col gap-5">
            <div className="flex h-full w-full gap-5">
                <div className="flex w-2/3">
                    <div className="relative h-[207px] w-full overflow-hidden rounded-lg bg-banapLight/10">
                        <div className="absolute right-0 top-0">
                            <RecentActivity />
                        </div>
                        <div className="flex h-full flex-col justify-between p-5">
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl font-semibold text-banapLight">
                                    Adicionou uma tarefa
                                </p>
                                <p className="text-xl text-banapLight">
                                    Criou uma tarefa para lembrar-se de adubar o
                                    talhão 01! O prazo é até ás 8:00
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-5 w-9 items-center justify-center rounded-sm bg-[#ff0000]">
                                    <p className="text-[8px] font-extrabold text-white">
                                        Alta
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <Clock size={"16px"} color="#1ea81e" />
                                    <p className="text-banapLight">6:00</p>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <div className="h-6 w-6 rounded-full bg-white"></div>
                                    <p className="text-banapLight">
                                        Nome completo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/3">
                    <div className="relative h-[207px] w-full overflow-hidden rounded-lg bg-banapLight/10">
                        <div className="absolute right-0 top-0">
                            <LastClient />
                        </div>
                        <div className="flex h-full flex-col justify-between p-5">
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl font-semibold text-banapLight">
                                    Você convidou
                                </p>
                                <p className="text-xl text-banapLight">
                                    Um convite foi enviado para<br></br> seus
                                    clientes!
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={"16px"} color="#1ea81e" />
                                <p className="text-banapLight">12:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className="relative h-[207px] w-full overflow-hidden rounded-lg bg-banapLight/10">
                    <div className="absolute right-0 top-0">
                        <RecentActivity />
                    </div>
                    <div className="flex h-full flex-col justify-between p-5">
                        <div className="flex flex-col gap-1">
                            <p className="text-2xl font-semibold text-banapLight">
                                Você adicionou uma observação
                            </p>
                            <p className="text-xl text-banapLight">
                                Foi adicionada uma observação ao talhão 01 do
                                cliente Victor Luis!
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center justify-center gap-1">
                                <Clock size={"16px"} color="#1ea81e" />
                                <p className="text-banapLight">6:00</p>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <div className="h-6 w-6 rounded-full bg-white"></div>
                                <p className="text-banapLight">Nome completo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityMock
