import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <div className="flex h-auto w-full flex-col items-center justify-center gap-5">
                <h1 className="text-[36px] font-extrabold text-secondary">
                    Oops!
                </h1>
                <p className="text-[20px]">Um erro inesperado ocorreu.</p>
                <p>{error.statusText || error.message}</p>
            </div>
        </div>
    )
}

export default ErrorPage
