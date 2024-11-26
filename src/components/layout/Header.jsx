import { Bell, ChevronLeft, ChevronRight } from "lucide-react"

const Header = ({ toggleSidebar, isSidebarVisible }) => {
    return (
        <div className="ml-auto flex w-full items-center justify-between px-[35px] pt-[30px]">
            <div
                className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-primary"
                onClick={toggleSidebar}
            >
                {isSidebarVisible ? (
                    <ChevronLeft size={"28px"} color="#FFFFFF" />
                ) : (
                    <ChevronRight size={"28px"} color="#FFFFFF" />
                )}
            </div>
            <div className="flex h-auto gap-[10px]">
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
