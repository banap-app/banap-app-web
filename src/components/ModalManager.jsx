import ModalLayout from "./modals/ModalLayout"
import AggregateModal from "./modals/AggregateModal"
import ExitModal from "./modals/ExitModal"
import { useModal } from "../context/ModalContext"
import ModalButton from "./modals/ModalButton"
import ObservationModal from "./modals/ObservationModal"
import SpacingModal from "./modals/SpacingModal"
import MeasurementModal from "./modals/MeasurementModal"
import AnalysisModal from "./modals/AnalysisModal"

const ModalManager = () => {
    const { isOpen, modal, closeModal } = useModal()

    if (!isOpen) return null

    const { name, callback } = modal || {}

    return (
        <ModalLayout>
            {name === "aggregate" && <AggregateModal />}
            {name === "exit" && <ExitModal logout={callback} />}
            {name === "observation" && <ObservationModal />}
            {name === "spacing" && <SpacingModal />}
            {name === "measurement" && <MeasurementModal />}
            {name === "analysis" && <AnalysisModal />}
            <ModalButton
                onClick={closeModal}
                value={"Cancelar"}
                isCancel={true}
            />
        </ModalLayout>
    )
}

export default ModalManager
