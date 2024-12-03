import React, { useEffect, useRef, useState } from "react"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const NPKChart = ({ fieldData }) => {
    const chartRef = useRef(null)
    const [nitrogen, setNitrogen] = useState([])
    const [phosphorus, setPhosphorus] = useState([])
    const [potassium, setPotassium] = useState([])
    const [chartData, setChartData] = useState({
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
            {
                label: "Nitrogênio",
                data: [],
                fill: true,
                borderColor: "#1a5d1a",
                borderWidth: 1,
                pointBackgroundColor: "#1a5d1a",
                pointBorderColor: "#1a5d1a",
                pointRadius: 6,
                tension: 0.4,
            },
            {
                label: "Fósforo",
                data: [],
                fill: true,
                borderColor: "#1ea81e",
                borderWidth: 1,
                pointBackgroundColor: "#1ea81e",
                pointBorderColor: "#1ea81e",
                pointRadius: 6,
                tension: 0.4,
            },
            {
                label: "Potássio",
                data: [],
                fill: true,
                borderColor: "#27db27",
                borderWidth: 1,
                pointBackgroundColor: "#27db27",
                pointBorderColor: "#27db27",
                pointRadius: 6,
                tension: 0.4,
            },
        ],
    })

    const createGradient = (ctx, chartHeight) => {
        const gradientPrimary = ctx.createLinearGradient(0, 0, 0, chartHeight)
        gradientPrimary.addColorStop(0, "rgba(30, 168, 30, 0.4)")
        gradientPrimary.addColorStop(1, "rgba(30, 168, 30, 0)")

        const gradientSecondary = ctx.createLinearGradient(0, 0, 0, chartHeight)
        gradientSecondary.addColorStop(0, "rgba(26, 93, 26, 0.4)")
        gradientSecondary.addColorStop(1, "rgba(26, 93, 26, 0)")

        const gradientTertiary = ctx.createLinearGradient(0, 0, 0, chartHeight)
        gradientTertiary.addColorStop(0, "rgba(39, 219, 39, 0.4)")
        gradientTertiary.addColorStop(1, "rgba(39, 219, 39, 0)")

        return { gradientPrimary, gradientSecondary, gradientTertiary }
    }

    useEffect(() => {
        const chart = chartRef.current

        if (chart) {
            const ctx = chart.ctx
            const { gradientPrimary, gradientSecondary, gradientTertiary } =
                createGradient(ctx, chart.height)

            chart.data.datasets[0].backgroundColor = gradientSecondary
            chart.data.datasets[1].backgroundColor = gradientPrimary
            chart.data.datasets[2].backgroundColor = gradientTertiary
            chart.update()
        }
    }, [])

    useEffect(() => {
        if (fieldData) {
            setNitrogen((prev) => {
                const array = [...prev, fieldData.nitrogen]

                if (array.length > 12) {
                    array.shift()
                }

                return array
            })
            setPhosphorus((prev) => {
                const array = [...prev, fieldData.phosphorus]

                if (array.length > 12) {
                    array.shift()
                }

                return array
            })
            setPotassium((prev) => {
                const array = [...prev, fieldData.potassium]

                if (array.length > 12) {
                    array.shift()
                }

                return array
            })

            setChartData((prevData) => ({
                ...prevData,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: nitrogen,
                    },
                    {
                        ...prevData.datasets[1],
                        data: phosphorus,
                    },
                    {
                        ...prevData.datasets[2],
                        data: potassium,
                    },
                ],
            }))
        }
    }, [fieldData])

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                backgroundColor: "#1ea81e",
                displayColors: false,
                cornerRadius: 8,
                padding: 12,
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`
                    },
                },
                titleFont: {
                    family: "Montserrat",
                    size: 16,
                },
                bodyFont: {
                    family: "Montserrat",
                },
                footerFont: {
                    family: "Montserrat",
                },
            },
            legend: {
                labels: {
                    color: "#1ea81e",
                    usePointStyle: true,
                    pointStyle: "point",
                    boxHeight: 8,
                    font: {
                        family: "Montserrat",
                        size: 12,
                    },
                },
            },
        },
        scales: {
            x: {
                offset: true,
                grid: {
                    display: false,
                },
                title: {
                    display: false,
                    text: "Meses",
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: "#1ea81e",
                    font: {
                        family: "Montserrat",
                        size: 12,
                    },
                    callback: function (value, index, labels) {
                        return chartData.labels[index].slice(0, 3)
                    },
                },
            },
            y: {
                grid: {
                    display: false,
                },
                title: {
                    display: false,
                    text: "Produção Total",
                    color: "#1ea81e",
                    font: {
                        family: "Montserrat",
                        size: 12,
                    },
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: "#1ea81e",
                    font: {
                        family: "Montserrat",
                        size: 12,
                    },
                    callback: function (value) {
                        if (value >= 1000) {
                            return value / 1000 + "K"
                        }
                        return value
                    },
                },
                min: 0,
                // max: 250,
            },
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        hover: {
            mode: "nearest",
            intersect: true,
            animationDuration: 200,
        },
        elements: {
            point: {
                radius: 6,
                hoverRadius: 10,
            },
        },
    }

    return (
        <div className="h-full w-full">
            <Line ref={chartRef} data={chartData} options={options} />
        </div>
    )
}

export default NPKChart
