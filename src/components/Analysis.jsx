import { AnalysisAssets } from "../assets/Lines"

const Analysis = () => {
    return (
        <div className="relative h-[170px] w-80 overflow-hidden rounded-lg bg-banapLight/10">
            <div className="absolute right-0 top-0">
                <AnalysisAssets />
            </div>
            <div className="flex items-center gap-2 p-6">
                <div className="h-9 w-9 rounded-full bg-white"></div>
                <div className="flex flex-col">
                    <p className="font-semibold text-banapLight">Nome</p>
                    <p className="text-xs text-banapLight">
                        Análise 01 -{" "}
                        <span className="font-medium">Calagem</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Analysis
