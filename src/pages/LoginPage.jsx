import { Lock, Mail } from "lucide-react"

const LoginPage = () => {
    return (
        <div className="flex h-screen w-screen">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6">
                <form>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-5">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="h-20 w-full max-w-md rounded-lg border-2 border-[#D0D0D0] px-20 text-2xl text-[#8F8F8F] focus:outline-none"
                                    />
                                    <div className="absolute left-6 top-6">
                                        <Mail color="#8F8F8F" size={"32px"} />
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Senha"
                                        className="h-20 w-full max-w-md rounded-lg border-2 border-[#D0D0D0] px-20 text-2xl text-[#8F8F8F] focus:outline-none"
                                    />
                                    <div className="absolute left-6 top-6">
                                        <Lock color="#8F8F8F" size={"32px"} />
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-xl text-banapLight">
                                Esqueceu sua senha?
                            </p>
                        </div>
                        <input
                            type="submit"
                            value={"Entrar"}
                            className="h-14 w-full max-w-md rounded-full bg-banapLight text-2xl font-medium text-white"
                        />
                    </div>
                </form>
                <div className="relative w-[258px]">
                    <hr className="w-full border-t border-[#8F8F8F]" />
                    <p className="absolute left-[114.6px] top-[-18px] bg-white p-1 text-xl text-[#8F8F8F]">
                        ou
                    </p>
                </div>
                <p className="text-center text-xl text-[#8F8F8F]">
                    Não possui uma conta?{" "}
                    <a className="text-banapLight">Cadastre-se</a>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
