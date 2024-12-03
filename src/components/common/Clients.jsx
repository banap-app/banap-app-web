import ClientCard from "./ClientCard"
import { useModal } from "../../context/ModalContext"
import { AggregateClientIcon } from "../../assets/CustomIcons"

const Clients = ({ addClientButton }) => {
    const { openModal } = useModal()

    const handleOpenModal = () => {
        openModal("aggregate")
    }

    return (
        <div className="flex flex-row gap-5">
            <div className="flex-shrink-0">
                <ClientCard />
            </div>
            {addClientButton && (
                <div className="flex-shrink-0">
                    <div
                        className="flex h-[170px] w-[220px] cursor-pointer items-center justify-center rounded-lg bg-primary/10"
                        onClick={handleOpenModal}
                    >
                        <AggregateClientIcon />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Clients
