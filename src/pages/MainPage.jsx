import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const MainPage = () => {
    return (
        <div className="flex h-screen w-screen overflow-x-hidden">
            <Sidebar />
            <div className="ml-64 flex h-full flex-1 flex-col">
                <Header />
                <main className="flex-1 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainPage
