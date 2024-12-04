import { ClientVector } from "../../assets/CardVectors"

const ClientCard = () => {
    return (
        <div className="relative h-[170px] w-[220px] overflow-hidden rounded-lg bg-primary/10">
            <div className="absolute bottom-0 right-0">
                <ClientVector />
            </div>
            <div className="flex w-full items-center gap-[10px] px-[25px] py-5">
                <div className="h-9 w-9 rounded-full bg-white"></div>
                <div className="flex flex-col">
                    <p className="text-[16px] font-semibold text-primary">
                        Lucas Silva
                    </p>
                    <p className="text-[12px] text-primary">Bananicultor</p>
                </div>
            </div>
        </div>
    )
}

export default ClientCard
