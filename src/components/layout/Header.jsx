import { Bell } from "lucide-react"

const Header = () => {
    return (
        <div className="mb-auto ml-auto flex flex-col items-center">
            <div className="mr-[35px] mt-[30px] flex h-auto w-full gap-[10px]">
                <div className="flex h-[36px] w-[159px] cursor-pointer items-center justify-center rounded-full border border-primary bg-white">
                    <p className="text-[12px] font-semibold text-primary">
                        Ver planos Premium
                    </p>
                </div>
                <div className="flex h-[36px] w-[159px] cursor-pointer items-center justify-center rounded-full bg-primary">
                    <p className="text-[12px] font-semibold text-white">
                        Instalar aplicativo
                    </p>
                </div>
                <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-primary">
                    <Bell size={"20px"} color="#FFFFFF" />
                </div>
                <div className="h-[36px] w-[36px] cursor-pointer rounded-full border-[3px] border-primary bg-white"></div>
            </div>
        </div>
    )
}

export default Header
