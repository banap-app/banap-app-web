import { useState, useEffect } from "react"
import { AddClient } from "../assets/Lines"

const Modal = ({ visible, closeModal }) => {
    const [isModalVisible, setModalVisible] = useState(visible)

    useEffect(() => {
        setModalVisible(visible)
    }, [visible])

    if (!isModalVisible) {
        return null
    }

    return (
        <div
            role="dialog"
            className="fixed z-10 flex h-full w-full items-center justify-center bg-black/20"
        >
            <div className="ml-64 rounded-[20px] bg-white px-9 py-12 drop-shadow-2xl">
                <div className="flex flex-col gap-[60px]">
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-1">
                            <AddClient />
                            <h1 className="text-[32px] font-semibold text-banapLight">
                                Agregando um novo cliente
                            </h1>
                        </div>
                        <p className="text-2xl text-banapLight">
                            Para agregar um novo cliente você precisará<br></br>{" "}
                            informar o e-mail cadastrado!
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <form>
                            <div className="flex flex-col gap-[60px]">
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="h-[69px] w-[567px] rounded-2xl border border-[#434961] border-opacity-10 bg-transparent px-[0.9rem] pt-7 font-medium text-black focus:outline-none"
                                    />
                                    <p className="absolute left-[0.9rem] top-3 text-sm font-medium text-[#b2bac6]">
                                        E-mail cliente
                                    </p>
                                </div>
                                <input
                                    type="submit"
                                    className="h-[53px] w-[567px] cursor-pointer rounded-[15px] bg-banapLight text-2xl font-bold text-white"
                                    value={"Enviar convite"}
                                />
                            </div>
                        </form>
                        <button
                            onClick={closeModal}
                            className="h-[53px] w-[567px] rounded-[15px] border border-banapLight border-opacity-10 bg-white text-2xl font-bold text-banapLight"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
