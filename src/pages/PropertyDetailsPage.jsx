import { LayoutDashboard } from "lucide-react"
import { FieldVector } from "../assets/CardVectors"

const PropertyDetailsPage = () => {
    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="title text-primary">
                                Talhões da Propriedade 01
                            </h1>
                            <p className="sub-title text-primary">
                                Talhões cadastrados da propriedade...
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <div className="relative h-[170px] w-[320px] overflow-hidden rounded-lg bg-primary/10 p-[27px]">
                                <div className="absolute right-0 top-0">
                                    <FieldVector />
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <LayoutDashboard
                                        size={"34px"}
                                        color="#1EA81E"
                                    />
                                    <div>
                                        <p className="text-[16px] font-semibold text-primary">
                                            Talhão 01
                                        </p>
                                        <p className="text-[12px] text-primary">
                                            Propriedade 01
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PropertyDetailsPage
