import { Bell } from "lucide-react"

const Header = () => {
    return (
        <div className="ml-auto flex h-9 items-center gap-3 p-9">
            <div className="flex h-[36px] cursor-pointer items-center justify-center rounded-3xl border-2 border-banapLight px-3 text-banapLight transition-all ease-in-out hover:bg-banapLight hover:text-white">
                <p className="text-xs font-semibold">Ver planos Premium</p>
            </div>
            <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-banapLight">
                <Bell color="#FFFFFF" />
            </div>
            <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full border-2 border-banapLight bg-white"></div>
        </div>
    )
}

export default Header
