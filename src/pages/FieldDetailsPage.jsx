import { useEffect, useState } from "react"
import NPKChart from "../components/charts/NPKChart"
import NPK from "../components/common/NPK"
import customFetch from "../utils/api"

const FieldDetailsPage = () => {
    const [fieldData, setFieldData] = useState(null)

    const payload = {
        httpMethod: "GET",
        path: "/get_last_data_of_esp",
        headers: {
            "Content-Type": "application/json",
        },
        queryStringParameters: null,
        body: "{}",
        isBase64Encoded: false,
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await customFetch(
                    "/get_last_data_of_esp",
                    "POST",
                    false,
                    payload
                )

                const parsedData = JSON.parse(data.body)

                if (parsedData.success) {
                    setFieldData(parsedData.data)
                    console.log("Data retrieved successfully:", parsedData.data)
                } else {
                    console.error("Error retrieving data:", parsedData.message)
                }
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()

        const interval = setInterval(fetchData, 10000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="h-full w-full items-center justify-center bg-transparent">
            <div className="flex flex-col gap-[60px]">
                <section>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h1 className="title text-primary">Talhão 01 </h1>
                            <p className="sub-title text-primary">
                                Gráficos, Dados do talhão, Análises e muito
                                mais...
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex w-full flex-col gap-[10px]">
                        <NPK />
                        <div className="flex h-[557px] w-full items-center justify-center rounded-lg bg-primary/10 p-[34px]">
                            <NPKChart fieldData={fieldData} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FieldDetailsPage
