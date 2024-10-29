import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

const MainPage = () => {
    return (
        <div className="flex h-screen w-screen">
            <Sidebar />
            <div className="flex h-full flex-1 flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default MainPage
