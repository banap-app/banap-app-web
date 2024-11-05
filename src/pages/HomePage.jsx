import Analysis from "../components/Analysis"
import Client from "../components/Client"

const HomePage = () => {
    return (
        <div className="flex h-full w-full flex-col overflow-auto">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold text-banapLight">
                        Bem-vindo de volta, Usuário
                    </h1>
                    <h2 className="text-2xl text-banapLight">
                        Nós estivemos trabalhando enquanto você esteve fora...
                    </h2>
                </div>
                <div className="flex h-full w-full gap-5">
                    <div className="flex w-2/3 flex-col gap-5">
                        <div className="h-[175px] w-full rounded-lg bg-banapLight/10"></div>
                        <div className="h-[207px] w-full rounded-lg bg-banapLight/10"></div>
                    </div>
                    <div className="w-1/3">
                        <div className="h-[402px] w-full rounded-lg bg-banapLight/10"></div>
                    </div>
                </div>
                <h1 className="text-3xl font-semibold text-banapLight">
                    Atividades recentes
                </h1>
                <div className="flex h-full w-full flex-col gap-5">
                    <div className="flex h-full w-full gap-5">
                        <div className="flex w-2/3">
                            <div className="h-[207px] w-full rounded-lg bg-banapLight/10"></div>
                        </div>
                        <div className="flex w-1/3">
                            <div className="h-[207px] w-full rounded-lg bg-banapLight/10"></div>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="h-[207px] w-full rounded-lg bg-banapLight/10"></div>
                    </div>
                </div>
                <h1 className="text-3xl font-semibold text-banapLight">
                    Clientes
                </h1>
                <div className="flex flex-row gap-5">
                    <Client />
                </div>
                <h1 className="text-3xl font-semibold text-banapLight">
                    Análises
                </h1>
                <div className="flex flex-row gap-5">
                    <Analysis />
                </div>
            </div>
        </div>
    )
}

export default HomePage
