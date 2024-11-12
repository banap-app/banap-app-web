import { MapPin } from "lucide-react"
import { AddClient } from "../assets/Lines"
import {
    Cloudy,
    Humidity,
    Pin,
    Rain,
    Rainy,
    Storm,
    SunBehindCloud,
    Sunny,
    Wind,
} from "../assets/Weather"
import Analysis from "../components/Analysis"
import Client from "../components/Client"
import WeatherMock from "../components/WeatherMock"
import ActivityMock from "../components/ActivityMock"

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
                <WeatherMock />
                <h1 className="text-3xl font-semibold text-banapLight">
                    Atividades recentes
                </h1>
                <ActivityMock />
                <h1 className="text-3xl font-semibold text-banapLight">
                    Clientes
                </h1>
                <div className="flex flex-row gap-5">
                    <div className="flex-shrink-0">
                        <Client />
                    </div>
                    <div className="flex h-[170px] w-56 flex-shrink-0 items-center justify-center rounded-lg bg-banapLight/10">
                        <AddClient />
                    </div>
                </div>
                <h1 className="text-3xl font-semibold text-banapLight">
                    Análises
                </h1>
                <div className="no-scrollbar flex h-full w-full flex-row gap-5 overflow-x-auto">
                    <div className="flex-grow-0">
                        <Analysis />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
