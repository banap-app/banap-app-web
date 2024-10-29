import { Bell } from "lucide-react"

const Header = () => {
    return (
        <div className="ml-auto flex items-center gap-[10px] p-[35px]">
            <div className="flex h-[36px] w-[146px] cursor-pointer items-center justify-center rounded-[25px] border border-banapLight bg-white text-banapLight transition duration-150 hover:bg-banapLight hover:text-white">
                <p className="t text-[12px] font-semibold">
                    Ver planos Premium
                </p>
            </div>
            <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-banapLight">
                <Bell color="white" />
            </div>
            <div className="h-[36px] w-[36px] cursor-pointer rounded-full border-4 border-banapLight bg-white"></div>
        </div>
    )
}

export default Header
