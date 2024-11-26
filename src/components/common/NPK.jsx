import {
    ArrowUpRight,
    Banana,
    ChartNoAxesCombined,
    Skull,
    Wind,
} from "lucide-react"

const NPK = () => {
    return (
        <div className="flex w-full gap-[10px]">
            <div className="h-[100px] w-1/4 rounded-lg bg-primary/10">
                <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-center gap-[5px]">
                        <Wind size={"14px"} color="#1EA81E" />
                        <p className="text-[12px] font-medium text-primary">
                            Nitrogênio
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[24px] font-semibold text-primary">
                            260Kg/Ha
                        </p>
                        <div className="flex h-min w-min items-center gap-[2px] rounded-sm bg-white px-1 py-[2px]">
                            <p className="text-[12px] text-primary">11.5%</p>
                            <ArrowUpRight size={"14px"} color="#1EA81E" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100px] w-1/4 rounded-lg bg-primary/10">
                <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-center gap-[5px]">
                        <Skull size={"14px"} color="#1EA81E" />
                        <p className="text-[12px] font-medium text-primary">
                            Fósforo
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[24px] font-semibold text-primary">
                            110Kg/Ha
                        </p>
                        <div className="flex h-min w-min items-center gap-[2px] rounded-sm bg-white px-1 py-[2px]">
                            <p className="text-[12px] text-primary">9.87%</p>
                            <ArrowUpRight size={"14px"} color="#1EA81E" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100px] w-1/4 rounded-lg bg-primary/10">
                <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-center gap-[5px]">
                        <Banana size={"14px"} color="#1EA81E" />
                        <p className="text-[12px] font-medium text-primary">
                            Potássio
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[24px] font-semibold text-primary">
                            550Kg/Ha
                        </p>
                        <div className="flex h-min w-min items-center gap-[2px] rounded-sm bg-white px-1 py-[2px]">
                            <p className="text-[12px] text-primary">12.47%</p>
                            <ArrowUpRight size={"14px"} color="#1EA81E" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[100px] w-1/4 rounded-lg bg-primary/10">
                <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-center gap-[5px]">
                        <ChartNoAxesCombined size={"14px"} color="#1EA81E" />
                        <p className="text-[12px] font-medium text-primary">
                            Produtividade esperada
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[24px] font-semibold text-primary">
                            40%
                        </p>
                        <div className="flex h-min w-min items-center gap-[2px] rounded-sm bg-white px-1 py-[2px]">
                            <p className="text-[12px] text-primary">4.10%</p>
                            <ArrowUpRight size={"14px"} color="#1EA81E" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NPK
