import { PenLine } from "lucide-react"

const ModalLayout = ({ children }) => {
    return (
        <div className="absolute flex h-screen w-screen items-center justify-center bg-black/20">
            <div className="flex h-full w-full rounded-none bg-white p-9 shadow-modal sm:h-auto sm:w-[639px] sm:rounded-[20px]">
                <div className="flex flex-col gap-[60px]">{children}</div>
            </div>
        </div>
    )
}

export default ModalLayout
