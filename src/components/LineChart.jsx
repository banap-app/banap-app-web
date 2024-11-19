import React from "react"
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
            },
        },
    }

    return (
        <div className="w-full">
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
