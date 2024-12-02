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
                            <div className="h-[170px] w-[320px] rounded-lg bg-primary/10 p-[27px]">
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
                </section>
            </div>
        </div>
    )
}

export default PropertyDetailsPage
