import ModalLayout from "./modals/ModalLayout"
import AggregateModal from "./modals/AggregateModal"
import ExitModal from "./modals/ExitModal"
import CancelButton from "./modals/CancelButton"
import { useModal } from "../context/ModalContext"

const ModalManager = () => {
    const { isOpen, modal, closeModal } = useModal()

    if (!isOpen) return null

    return (
        <ModalLayout>
            {modal == "aggregate" && <AggregateModal />}
            {modal == "exit" && <ExitModal />}
            <CancelButton onClick={closeModal} />
        </ModalLayout>
    )
}

export default ModalManager
