import { Outlet } from "react-router-dom"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Breadcrumbs from "../components/layout/Breadcrumbs"

const Layout = () => {
    return (
        <div className="flex h-screen">
            <div className="flex">
                <Sidebar />
            </div>
            <div className="flex flex-1 flex-col overflow-auto">
                <div className="flex flex-col gap-20">
                    <Header />
                    <Breadcrumbs />
                </div>
                <main className="flex-1 px-[35px] pb-[35px] pt-[60px]">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
