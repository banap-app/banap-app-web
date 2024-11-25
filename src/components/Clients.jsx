import ClientCard from "./ClientCard"

const Clients = ({ addClientButton }) => {
    return (
        <div className="flex flex-row gap-5">
            <div className="flex-shrink-0">
                <ClientCard />
            </div>
            {addClientButton && (
                <div className="flex-shrink-0">
                    <div className="h-[170px] w-[220px] rounded-lg bg-primary/10"></div>
                </div>
            )}
        </div>
    )
}

export default Clients
