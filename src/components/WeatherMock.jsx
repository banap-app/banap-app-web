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

const WeatherMock = () => {
    return (
        <div className="flex h-full w-full gap-5">
            <div className="flex w-2/3 flex-col gap-5">
                <div className="flex h-[175px] w-full items-center justify-center gap-12 rounded-lg bg-banapLight/10">
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm font-bold text-banapLight">
                            Amanhã
                        </p>
                        <div className="h-16 w-16 items-center justify-center">
                            <Cloudy size={"64"} />
                        </div>
                        <div className="flex gap-1">
                            <p className="text font-outline text-base font-bold text-white">
                                26º
                            </p>
                            <p className="text-base font-bold text-banapLight">
                                16º
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm font-bold text-banapLight">
                            Sexta-Feira
                        </p>
                        <div className="flex h-16 w-16 items-center justify-center">
                            <Sunny />
                        </div>
                        <div className="flex gap-1">
                            <p className="text font-outline text-base font-bold text-white">
                                28º
                            </p>
                            <p className="text-base font-bold text-banapLight">
                                20º
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm font-bold text-banapLight">
                            Sabado
                        </p>
                        <div className="flex h-16 w-16 items-center justify-center">
                            <Rainy />
                        </div>
                        <div className="flex gap-1">
                            <p className="text font-outline text-base font-bold text-white">
                                25º
                            </p>
                            <p className="text-base font-bold text-banapLight">
                                21º
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm font-bold text-banapLight">
                            Domingo
                        </p>
                        <div className="flex h-16 w-16 items-center justify-center">
                            <Storm />
                        </div>
                        <div className="flex gap-1">
                            <p className="text font-outline text-base font-bold text-white">
                                20º
                            </p>
                            <p className="text-base font-bold text-banapLight">
                                14º
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm font-bold text-banapLight">
                            Segunda-Feira
                        </p>
                        <div className="flex h-16 w-16 items-center justify-center">
                            <SunBehindCloud />
                        </div>
                        <div className="flex gap-1">
                            <p className="text font-outline text-base font-bold text-white">
                                24º
                            </p>
                            <p className="text-base font-bold text-banapLight">
                                18º
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-[207px] w-full rounded-lg bg-banapLight/10"></div>
            </div>
            <div className="w-1/3">
                <div className="relative h-[402px] w-full rounded-lg bg-banapLight/10">
                    <div className="absolute left-[-15px] top-[-50px]">
                        <Cloudy size={"138"} />
                    </div>
                    <div className="absolute right-0 flex gap-1 p-6">
                        <Pin />
                        <p className="text-sm font-bold text-banapLight">
                            Registro, SP
                        </p>
                    </div>
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                        <p className="text-[5.5rem] font-bold leading-none text-banapLight">
                            21
                        </p>
                        <div className="flex gap-1">
                            <p className="font-outline font-bold text-white">
                                24º
                            </p>
                            <p className="font-bold text-banapLight">24º</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 flex w-full items-center justify-center gap-5 py-6">
                        <div className="flex gap-2">
                            <Wind size={"36px"} />
                            <div>
                                <p className="text-xs text-banapLight">Vento</p>
                                <p className="text-[8px] font-medium text-banapLight">
                                    <span className="text-xs font-bold">
                                        17
                                    </span>{" "}
                                    Km/H
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Humidity />
                            <div>
                                <p className="text-xs text-banapLight">
                                    Umidade
                                </p>
                                <p className="text-[8px] font-medium text-banapLight">
                                    <span className="text-xs font-bold">
                                        31
                                    </span>{" "}
                                    %
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Rain />
                            <div>
                                <p className="text-xs text-banapLight">Chuva</p>
                                <p className="text-[8px] font-medium text-banapLight">
                                    <span className="text-xs font-bold">
                                        17
                                    </span>{" "}
                                    Km/H
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherMock
