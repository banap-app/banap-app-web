import {
    ChevronRight,
    House,
    LayoutDashboard,
    Tractor,
    TrendingUp,
    Users,
    Wrench,
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
    const location = useLocation()

    if (location.pathname === "/") {
        return null
    }

    const pathnames = location.pathname.split("/").filter((x) => x)

    const breadcrumbMap = {
        clients: {
            label: "Clientes",
            icon: <Users size={"28px"} color="#1EA81E" />,
        },
        analytics: {
            label: "Análises",
            icon: <TrendingUp size={"28px"} color="#1EA81E" />,
        },
        tools: {
            label: "Ferramentas",
            icon: <Wrench size={"28px"} color="#1EA81E" />,
        },
        details: {
            label: "Detalhes",
        },
        properties: {
            label: "Propriedades",
            icon: <Tractor size={"28px"} color="#1EA81E" />,
        },
        fields: {
            label: "Talhões",
            icon: <LayoutDashboard size={"28px"} color="#1EA81E" />,
        },
    }

    const getBreadcrumb = (segment) => {
        return (
            breadcrumbMap[segment] || {
                label: segment.charAt(0).toUpperCase() + segment.slice(1),
                icon: null,
            }
        )
    }

    return (
        <div className="w-full px-[35px]">
            <nav className="flex gap-[10px]">
                <Link
                    to={"/"}
                    className="sub-title flex items-center gap-[10px] text-primary"
                >
                    <House />
                    Ínicio
                </Link>
                {pathnames.map((value, index) => {
                    const path = `/${pathnames.slice(0, index + 1).join("/")}`
                    const { label, icon } = getBreadcrumb(value)

                    const isActive = location.pathname === path

                    return (
                        <span
                            key={path}
                            className="flex items-center gap-[10px]"
                        >
                            <span>
                                <ChevronRight size={"28px"} color="#1EA81E" />
                            </span>
                            <Link
                                to={path}
                                className={`sub-title flex items-center gap-[10px] text-primary ${isActive ? "font-semibold" : "font-regular"}`}
                            >
                                {icon && <span>{icon}</span>}
                                {label}
                            </Link>
                        </span>
                    )
                })}
            </nav>
        </div>
    )
}

export default Breadcrumbs
