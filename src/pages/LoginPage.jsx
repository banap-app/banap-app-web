import { Mail, Lock } from "lucide-react"

const LoginPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex flex-col gap-6">
                <form>
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-6">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-[80px] w-[458px] rounded-lg border-2 border-[#d0d0d0] px-[80px] py-[23px] text-[28px] text-[#8f8f8f]"
                                />
                                <div className="absolute left-6 top-6">
                                    <Mail size={"32px"} color="#8f8f8f" />
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    className="h-[80px] w-[458px] rounded-lg border-2 border-[#d0d0d0] px-[80px] py-[23px] text-[28px] text-[#8f8f8f]"
                                />
                                <div className="absolute left-6 top-6">
                                    <Lock size={"32px"} color="#8f8f8f" />
                                </div>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Entrar"
                            className="bg-banapLight h-[58px] w-[458px] rounded-[48px] text-[28px] font-medium text-white"
                        />
                    </div>
                </form>
                <p className="font-regular text-center text-xl text-[#8f8f8f]">
                    Não possui uma conta?{" "}
                    <a className="text-banapLight">Cadastre-se.</a>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
