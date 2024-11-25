import { Contact, Lock, Mail, User } from "lucide-react"
import Input from "../components/forms/Input"
import Button from "../components/forms/Button"

const RegisterPage = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <div className="flex h-auto w-full items-center justify-center">
                <div className="flex w-full flex-col items-center justify-center gap-20">
                    <div className="w-full text-center">
                        <h1 className="text-[48px] font-extrabold text-primary">
                            Crie sua<br></br>Conta
                        </h1>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-8">
                        <form className="flex w-full flex-col items-center justify-center sm:w-[458px]">
                            <div className="flex w-full flex-col gap-12">
                                <div className="flex w-full flex-col gap-6">
                                    <Input
                                        type={"text"}
                                        name={"name"}
                                        id={"name"}
                                        placeholder={"Seu nome"}
                                        icon={User}
                                        required
                                    />
                                    <Input
                                        type={"email"}
                                        name={"email"}
                                        id={"email"}
                                        placeholder={"Seu email"}
                                        icon={Mail}
                                        required
                                    />
                                    <Input
                                        type={"password"}
                                        name={"password"}
                                        id={"password"}
                                        placeholder={"Sua senha"}
                                        icon={Lock}
                                        required
                                    />
                                    <Input
                                        type={"text"}
                                        name={"crea"}
                                        id={"crea"}
                                        placeholder={"Seu CREA"}
                                        icon={Contact}
                                        required
                                    />
                                </div>
                                <Button value={"Cadastrar-se"} />
                            </div>
                        </form>
                        <div className="w-full text-center">
                            <p className="text-[20px] text-[#8F8F8F]">
                                Já possui uma conta?{" "}
                                <span className="cursor-pointer text-primary">
                                    Logar-se.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
