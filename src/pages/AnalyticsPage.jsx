import Analytics from "../components/Analytics"
import Activity from "../components/mocks/Activity"

const AnalyticsPage = () => {
    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="title text-primary">
                                Dados das análises
                            </h1>
                            <p className="sub-title text-primary">
                                Todos os dados reunidos em um só lugar!
                            </p>
                        </div>
                        <Analytics />
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

export default AnalyticsPage
