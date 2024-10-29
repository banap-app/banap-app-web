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
        <div className="flex h-full w-[300px] flex-col bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="mb-auto ml-[35px] mt-[113px] flex flex-col gap-[80px]">
                <span className="flex items-center gap-[15px]">
                    <House size={"28px"} color="#1EA81E" />
                    <p className="text-base font-medium text-banapLight">
                        Início
                    </p>
                </span>
                <ul className="flex flex-col gap-[25px] text-base font-medium text-banapLight">
                    <li className="flex items-center gap-[15px]">
                        <Users size={"28px"} />
                        Clientes
                    </li>
                    <li className="flex items-center gap-[15px]">
                        <TrendingUp size={"28px"} />
                        Análises
                    </li>
                    <li className="flex items-center gap-[15px]">
                        <Wrench size={"28px"} />
                        Ferramentas
                    </li>
                </ul>
            </div>
            <div className="mb-[63px] ml-[35px] flex flex-col gap-5">
                <LogOut size={"28px"} color="#1EA81E" />
                <Settings size={"28px"} color="#1EA81E" />
            </div>
        </div>
    )
}

export default Sidebar
