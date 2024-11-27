import { createContext, useContext } from "react"
import { useState } from "react"

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState(null)

    const openModal = (modal = null, callback = null) => {
        setModal({ name: modal, callback })
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
        setModal(null)
    }

    return (
        <ModalContext.Provider value={{ isOpen, modal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)
