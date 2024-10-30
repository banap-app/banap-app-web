import { Mail, Lock } from "lucide-react"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex w-full max-w-md flex-col gap-6">
                <form>
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-6">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-20 w-[458px] rounded-lg border-2 border-[#d0d0d0] px-[80px] py-[23px] text-[28px] text-[#8f8f8f] focus:outline-none"
                                />
                                <div className="absolute left-6 top-6">
                                    <Mail size={"32px"} color="#8f8f8f" />
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    className="h-20 w-[458px] rounded-lg border-2 border-[#d0d0d0] px-[80px] py-[23px] text-[28px] text-[#8f8f8f] focus:outline-none"
                                />
                                <div className="absolute left-6 top-6">
                                    <Lock size={"32px"} color="#8f8f8f" />
                                </div>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Entrar"
                            className="h-[58px] w-[458px] cursor-pointer rounded-[48px] bg-banapLight text-[28px] font-medium text-white"
                        />
                    </div>
                </form>
                <p className="font-regular text-center text-xl text-[#8f8f8f]">
                    Não possui uma conta?{" "}
                    <Link to={"/register"}>
                        <a className="cursor-pointer text-banapLight">
                            Cadastre-se.
                        </a>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
