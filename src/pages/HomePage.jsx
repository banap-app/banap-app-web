const HomePage = () => {
    return (
        <div className="flex h-full w-full flex-col">
            {/* <h1 className="text-[32px] font-semibold text-banapLight">
                Bem-vindo de volta, Usuário
            </h1>
            <h2 className="font-regular text-[24px] text-banapLight">
                Nós estivemos trabalhando enquanto esteve fora...
            </h2> */}
            <div className="flex items-center justify-center gap-5">
                <div className="flex flex-col gap-5">
                    <div className="h-[175px] w-[701px] rounded-lg bg-banapLight/10"></div>
                    <div className="h-[207px] w-[701px] rounded-lg bg-banapLight/10"></div>
                </div>
                <div className="h-[402px] w-[349px] rounded-lg bg-banapLight/10"></div>
            </div>
        </div>
    )
}

export default HomePage
