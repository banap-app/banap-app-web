import { ClientAssets } from "../assets/Lines"

const Client = () => {
    return (
        <div className="relative h-[170px] w-56 overflow-hidden rounded-lg bg-banapLight/10">
            <div className="absolute right-0 top-0">
                <ClientAssets />
            </div>
            <div className="flex items-center gap-2 px-6 py-5">
                <div className="h-9 w-9 rounded-full bg-white"></div>
                <div className="flex flex-col">
                    <p className="font-semibold text-banapLight">Nome</p>
                    <p className="text-xs text-banapLight">Bananicultor</p>
                </div>
            </div>
        </div>
    )
}

export default Client
