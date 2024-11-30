import { Outlet } from "react-router-dom"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Breadcrumbs from "../components/layout/Breadcrumbs"
import { useState } from "react"
import ModalLayout from "../components/modals/ModalLayout"

const Layout = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true)

    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev)
    }

    return (
        <div className="flex h-screen">
            <div className="flex">{isSidebarVisible && <Sidebar />}</div>
            <div className="flex flex-1 flex-col overflow-auto">
                <div className="flex flex-col gap-20">
                    <Header
                        toggleSidebar={toggleSidebar}
                        isSidebarVisible={isSidebarVisible}
                    />
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
