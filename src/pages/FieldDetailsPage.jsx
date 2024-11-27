import NPKChart from "../components/charts/NPKChart"
import NPK from "../components/common/NPK"

const FieldDetailsPage = () => {
    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="title text-primary">Talhão 01 </h1>
                            <p className="sub-title text-primary">
                                Gráficos, Dados do talhão, Análises e muito
                                mais...
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex w-full flex-col gap-[10px]">
                        <NPK />
                        <div className="flex h-[557px] w-full items-center justify-center rounded-lg bg-primary/10 p-[34px]">
                            <NPKChart />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FieldDetailsPage
