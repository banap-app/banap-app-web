import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Modal from "../components/Modal"
import { useState } from "react"

const MainPage = () => {
    const [isModalVisible, setModalVisible] = useState(false)

    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <div className="flex h-screen w-screen overflow-x-hidden">
            <Modal visible={isModalVisible} closeModal={closeModal} />
            <Sidebar />
            <div className="ml-64 flex h-full flex-1 flex-col">
                <Header />
                <main className="flex-1 p-8">
                    <Outlet context={{ openModal }} />
                </main>
            </div>
        </div>
    )
}

export default MainPage
