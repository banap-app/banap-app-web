import React, { useEffect, useRef } from "react"
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

const LineChart = () => {
    const chartRef = useRef(null)

    useEffect(() => {
        const chart = chartRef.current

        if (chart) {
            const ctx = chart.ctx
            const gradient = ctx.createLinearGradient(0, 0, 0, chart.height)
            gradient.addColorStop(0, "rgba(30, 168, 30, 0.4)")
            gradient.addColorStop(1, "rgba(30, 168, 30, 0)")

            chart.data.datasets[0].backgroundColor = gradient
            chart.update()
        }
    }, [])

    const data = {
        labels: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
        ],
        datasets: [
            {
                label: "Produção",
                data: [
                    27000, 35000, 20000, 30000, 70000, 60000, 73000, 160000,
                    165000, 110000, 70000, 90000,
                ],
                fill: true,
                borderColor: "#1ea81e",
                tension: 0.4,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`
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
                },
            },
            y: {
                grid: {
                    display: false,
                },
                title: {
                    display: false,
                    text: "Produção Total",
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
                max: 250000,
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
    }

    return (
        <div className="w-full">
            <Line ref={chartRef} data={data} options={options} />
        </div>
    )
}

export default LineChart
