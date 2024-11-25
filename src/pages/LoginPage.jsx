import { Mail, Lock } from "lucide-react"
import Input from "../components/forms/Input"
import Button from "../components/forms/Button"

const LoginPage = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <div className="flex h-auto w-full flex-col items-center justify-center gap-3">
                <form className="flex w-full flex-col items-center justify-center sm:w-[458px]">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex w-full flex-col gap-6">
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
                            </div>
                            <div className="w-full text-right">
                                <a
                                    href=""
                                    className="text-[20px] text-primary underline"
                                >
                                    Esqueceu sua senha?
                                </a>
                            </div>
                        </div>
                        <Button value={"Entrar"} />
                    </div>
                </form>
                <div className="w-full text-center">
                    <p className="text-[20px] text-[#8F8F8F]">
                        Não possui uma conta?{" "}
                        <span className="cursor-pointer text-primary">
                            Cadastre-se.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
