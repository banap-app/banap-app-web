import { Mail, Lock } from "lucide-react"
import Input from "../components/forms/Input"
import Button from "../components/forms/Button"
import { useState } from "react"
import customFetch from "../utils/api"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"

const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await customFetch("", "POST", false, {
                email,
                password,
            })
            if (response.token) {
                localStorage.setItem("token", response.token)
                navigate("/")
            }
        } catch (error) {
            console.error("Erro:", error)
        }
    }

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-[75px]">
            <img src={logo} alt="logo" className="h-auto w-[350px]" />
            <div className="flex h-auto w-full flex-col items-center justify-center gap-3">
                <form
                    className="flex w-full flex-col items-center justify-center sm:w-[458px]"
                    onSubmit={(e) => {
                        handleSubmit(e)
                    }}
                >
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex w-full flex-col gap-6">
                                <Input
                                    type={"email"}
                                    name={"email"}
                                    id={"email"}
                                    placeholder={"Seu email"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    icon={Mail}
                                    required
                                />
                                <Input
                                    type={"password"}
                                    name={"password"}
                                    id={"password"}
                                    placeholder={"Sua senha"}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
                        <Link to={"/register"}>
                            <span className="cursor-pointer text-primary">
                                Cadastre-se.
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
