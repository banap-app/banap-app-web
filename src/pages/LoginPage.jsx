const LoginPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <form>
                <div className="flex flex-col gap-6">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="h-[80px] w-[458px] rounded-lg border-2 border-[#d0d0d0] px-7 py-[23px] text-[28px] text-[#8f8f8f]"
                    />
                    <input
                        type="password"
                        placeholder="Your password"
                        className="h-[80px] w-[458px] rounded-lg border-2 border-[#d0d0d0] px-7 py-[23px] text-[28px] text-[#8f8f8f]"
                    />
                </div>
            </form>
        </div>
    )
}

export default LoginPage
