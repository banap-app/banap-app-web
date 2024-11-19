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
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
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
                borderWidth: 1,
                pointBackgroundColor: "#1ea81e",
                pointBorderColor: "#1ea81e",
                pointRadius: 6,
                tension: 0.4,
            },
        ],
    }

    const options = {
        responsive: true,
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
                        return data.labels[index].slice(0, 3)
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
            <Line ref={chartRef} data={data} options={options} />
        </div>
    )
}

export default LineChart
