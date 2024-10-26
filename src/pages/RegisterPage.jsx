import { User, Mail, Lock, Contact } from "lucide-react"

const RegisterPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex flex-col gap-20">
                <h1 className="text-center text-5xl font-extrabold text-banapLight">
                    Crie a sua
                    <br />
                    conta
                </h1>
                <form>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    className="h-[80px] w-[458px] rounded-lg border-2 border-[#d0d0d0] px-[80px] py-[23px] text-[28px] text-[#8f8f8f]"
                                />
                                <div className="absolute left-6 top-6">
                                    <User size={"32px"} color="#8f8f8f" />
                                </div>
                            </div>
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
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Senha"
                                    className="h-[80px] w-[458px] rounded-lg border-2 border-[#d0d0d0] px-[80px] py-[23px] text-[28px] text-[#8f8f8f]"
                                />
                                <div className="absolute left-6 top-6">
                                    <Contact size={"32px"} color="#8f8f8f" />
                                </div>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Cadastrar"
                            className="h-[58px] w-[458px] rounded-[48px] bg-banapLight text-[28px] font-medium text-white"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
