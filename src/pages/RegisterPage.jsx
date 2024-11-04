import { Contact, Lock, Mail, User } from "lucide-react"
import { LowerLines, UpperLines } from "../assets/Lines"
const RegisterPage = () => {
    return (
        <div className="flex h-screen w-screen">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6">
                <div className="absolute right-0 top-0">
                    <UpperLines />
                </div>
                <div className="absolute bottom-0 left-0">
                    <LowerLines />
                </div>
                <h1 className="text-center text-5xl font-extrabold text-banapLight">
                    Crie a sua<br></br>conta
                </h1>
                <form>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    className="h-20 w-full max-w-md rounded-lg border-2 border-[#D0D0D0] px-20 text-2xl text-[#8F8F8F] focus:outline-none"
                                />
                                <div className="absolute left-6 top-6">
                                    <User color="#8F8F8F" size={"32px"} />
                                </div>
                            </div>
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
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="CREA"
                                    className="h-20 w-full max-w-md rounded-lg border-2 border-[#D0D0D0] px-20 text-2xl text-[#8F8F8F] focus:outline-none"
                                />
                                <div className="absolute left-6 top-6">
                                    <Contact color="#8F8F8F" size={"32px"} />
                                </div>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value={"Cadastrar"}
                            className="h-14 w-full max-w-md rounded-full bg-banapLight text-2xl font-medium text-white"
                        />
                    </div>
                </form>
                <p className="text-center text-xl text-[#8F8F8F]">
                    Já possui uma conta?{" "}
                    <a className="text-banapLight">Faça login</a>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage
