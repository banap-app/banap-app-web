import Clients from "../components/Clients"
import Activity from "../components/mocks/Activity"

const ClientsPage = () => {
    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                                <h1 className="title text-primary">
                                    Dados dos clientes
                                </h1>
                                <p className="sub-title text-primary">
                                    Todos os dados reunidos em um só lugar!
                                </p>
                            </div>
                            <div className="flex h-[48px] w-[316px] cursor-pointer items-center justify-center rounded-lg bg-primary">
                                <p className="text-[20px] font-bold text-white">
                                    Agregar novo cliente
                                </p>
                            </div>
                        </div>
                        <Clients />
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-10">
                        <h2 className="text-[32px] font-semibold text-primary">
                            Atividades recentes
                        </h2>
                        <Activity />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ClientsPage