import {
    House,
    LogOut,
    Settings,
    TrendingUp,
    Users,
    Wrench,
} from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="w-[300px] bg-white shadow-sidebar">
            <div className="flex h-full flex-col justify-between px-[35px] py-[60px]">
                <div className="flex flex-col gap-20">
                    <Link to={"/"}>
                        <p className="flex cursor-pointer items-center gap-[15px] text-[16px] font-medium text-primary">
                            <House size={"28px"} />
                            Início
                        </p>
                    </Link>
                    <nav className="w-full">
                        <ul className="m-0 list-none gap-[25px] p-0 text-white">
                            <div className="flex flex-col gap-[25px]">
                                <Link to={"/clients"}>
                                    <li className="flex cursor-pointer items-center gap-[15px] text-[16px] font-medium text-primary">
                                        <Users size={"28px"} />
                                        Clientes
                                    </li>
                                </Link>
                                <Link to={"/analytics"}>
                                    <li className="flex cursor-pointer items-center gap-[15px] text-[16px] font-medium text-primary">
                                        <TrendingUp size={"28px"} />
                                        Análises
                                    </li>
                                </Link>
                                <Link to={"/tools"}>
                                    <li className="flex cursor-pointer items-center gap-[15px] text-[16px] font-medium text-primary">
                                        <Wrench size={"28px"} />
                                        Ferramentas
                                    </li>
                                </Link>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="cursor-pointer">
                        <LogOut color="#1EA81E" size={"28px"} />
                    </div>
                    <div className="cursor-pointer">
                        <Settings color="#1EA81E" size={"28px"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
