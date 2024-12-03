import { Clock } from "lucide-react"
import { ActivityVector } from "../../assets/CardVectors"

const Activity = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-5">
                <div className="w-2/3">
                    <div className="relative h-[207px] w-full rounded-lg bg-primary/10 px-[25px] py-5">
                        <div className="absolute bottom-0 right-0">
                            <ActivityVector />
                        </div>
                        <div className="flex h-full flex-col justify-between">
                            <div className="flex flex-col">
                                <p className="text-[24px] font-semibold text-primary">
                                    Adicionou uma tarefa
                                </p>
                                <p className="text-[20px] text-primary">
                                    Criou uma tarefa para lembrar-se de{" "}
                                    <b className="font-semibold">adubar</b> o{" "}
                                    <b className="font-semibold">talhão 01!</b>{" "}
                                    O prazo é até as{" "}
                                    <b className="font-semibold">8:00.</b>
                                </p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="h-min w-min items-center justify-center rounded-[3px] bg-red-600 px-[10px] py-1">
                                    <p className="text-[8px] font-extrabold text-white">
                                        Alta
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={"16px"} color="#1EA81E" />
                                    <p className="text-[16px] text-primary">
                                        6:00
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="h-6 w-6 rounded-full bg-white"></div>
                                    <p className="text-[16px] text-primary">
                                        Victor Luís
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="relative h-[207px] w-full rounded-lg bg-primary/10 px-[25px] py-5">
                        <div className="absolute bottom-0 right-0">
                            <ActivityVector />
                        </div>
                        <div className="flex h-full flex-col justify-between">
                            <div className="flex flex-col">
                                <p className="text-[24px] font-semibold text-primary">
                                    Você convidou
                                </p>
                                <p className="text-[20px] text-primary">
                                    Um <b className="font-semibold">convite</b>{" "}
                                    foi enviado para seus clientes!
                                </p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-1">
                                    <Clock size={"16px"} color="#1EA81E" />
                                    <p className="text-[16px] text-primary">
                                        6:00
                                    </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="h-6 w-6 rounded-full bg-white"></div>
                                    <p className="text-[16px] text-primary">
                                        Victor Luís
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="relative h-[207px] w-full rounded-lg bg-primary/10 px-[25px] py-5">
                    <div className="absolute bottom-0 right-0">
                        <ActivityVector />
                    </div>
                    <div className="flex h-full flex-col justify-between">
                        <div className="flex flex-col">
                            <p className="text-[24px] font-semibold text-primary">
                                Você adicionou uma observação
                            </p>
                            <p className="text-[20px] text-primary">
                                Foi adicionada uma observação ao{" "}
                                <b className="font-semibold">talhão 01</b> do
                                cliente{" "}
                                <b className="font-semibold">Victor Luís!</b>
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-1">
                                <Clock size={"16px"} color="#1EA81E" />
                                <p className="text-[16px] text-primary">6:00</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="h-6 w-6 rounded-full bg-white"></div>
                                <p className="text-[16px] text-primary">
                                    Victor Luís
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity
