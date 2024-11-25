import Analytics from "../components/Analytics"
import Clients from "../components/Clients"
import Activity from "../components/mocks/Activity"
import Weather from "../components/mocks/Weather"

const HomePage = () => {
    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-[60px]">
                        <div className="flex flex-col">
                            <h1 className="title text-primary">
                                Bem-vindo de volta, Gilmar
                            </h1>
                            <p className="sub-title text-primary">
                                Nós estivemos trabalhando enquanto esteve
                                fora...
                            </p>
                        </div>
                        <Weather />
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
                <section>
                    <div className="flex flex-col gap-10">
                        <h2 className="text-[32px] font-semibold text-primary">
                            Clientes
                        </h2>
                        <Clients addClientButton={true} />
                    </div>
                </section>
                <section>
                    <div className="flex flex-col gap-10">
                        <h2 className="text-[32px] font-semibold text-primary">
                            Análises
                        </h2>
                        <Analytics />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage
