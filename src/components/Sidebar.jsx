import {
    House,
    LogOut,
    Settings,
    TrendingUp,
    Users,
    Wrench,
} from "lucide-react"

const Sidebar = () => {
    return (
        <div className="flex h-full w-64 bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] md:w-64">
            <div className="ml-8 flex h-full flex-col justify-between py-12">
                <span className="flex items-center gap-4 text-banapLight">
                    <House size={"28px"} />
                    <p className="text-base font-medium">Início</p>
                </span>
                <ul className="flex flex-col gap-6 text-banapLight">
                    <li className="flex items-center gap-4">
                        <Users size={"28px"} />
                        <p className="text-base font-medium">Clientes</p>
                    </li>
                    <li className="flex gap-4">
                        <TrendingUp size={"28px"} />
                        <p className="items-center text-base font-medium">
                            Análises
                        </p>
                    </li>
                    <li className="flex gap-4">
                        <Wrench size={"28px"} />
                        <p className="items-center text-base font-medium">
                            Ferramentas
                        </p>
                    </li>
                </ul>
                <div className="flex flex-col gap-5 text-banapLight">
                    <LogOut size={"28px"} />
                    <Settings size={"28px"} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
