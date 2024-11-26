import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Breadcrumbs from "../components/Breadcrumbs"
import ExitModal from "../components/modals/ExitModal"
import ModalLayout from "../components/modals/ModalLayout"
import AggregateModal from "../components/modals/AggregateModal"

const Layout = () => {
    return (
        <div className="flex h-screen">
            <AggregateModal />
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
