import { AnalyticsVector } from "../../assets/CardVectors"

const Analytics = () => {
    return (
        <div className="flex flex-row gap-5">
            <div className="flex-shrink-0">
                <div className="relative h-[170px] w-[320px] rounded-lg bg-primary/10">
                    <div className="absolute bottom-0 right-0">
                        <AnalyticsVector />
                    </div>
                    <div className="flex w-full items-center gap-[10px] px-[25px] py-5">
                        <div className="h-9 w-9 rounded-full bg-white"></div>
                        <div className="flex flex-col">
                            <p className="text-[16px] font-semibold text-primary">
                                Lucas Silva
                            </p>
                            <p className="text-[12px] text-primary">
                                Análise 01 -{" "}
                                <span className="font-medium">Calagem</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics
