import React, { useEffect, useRef } from "react"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { callback } from "chart.js/helpers"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = () => {
    const data = {
        labels: [
            ["Janeiro", "Fevereiro", "Março"],
            ["Abril", "Maio", "Junho"],
            ["Julho", "Agosto", "Setembro"],
            ["Outubro", "Novembro", "Dezembro"],
        ],
        datasets: [
            {
                label: "Nitrogênio",
                data: [10000, 7500, 10000, 4000],
                backgroundColor: "#1A5D1A",
                borderColor: "#1A5D1A",
                barPercentage: 0.5,
                categoryPercentage: 0.5,
            },
            {
                label: "Fósforo",
                data: [7500, 15000, 3000, 13000],
                backgroundColor: "#1EA81E",
                borderColor: "#1EA81E",
                barPercentage: 0.5,
                categoryPercentage: 0.5,
            },
            {
                label: "Potássio",
                data: [10000, 10000, 7500, 9500],
                backgroundColor: "#27DB27",
                borderColor: "#27DB27",
                barPercentage: 0.5,
                categoryPercentage: 0.5,
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
                position: "top",
                labels: {
                    color: "#1ea81e",
                    usePointStyle: true,
                    pointStyle: "point",
                    boxHeight: 8,
                    font: {
                        family: "Montserrat",
                        size: 12,
                    },
                    align: "center",
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
                ticks: {
                    color: "#1ea81e",
                    font: {
                        family: "Montserrat",
                        size: 12,
                    },
                    callback: function (value, index) {
                        const months = [
                            ["Janeiro", "Fevereiro", "Março"],
                            ["Abril", "Maio", "Junho"],
                            ["Julho", "Agosto", "Setembro"],
                            ["Outubro", "Novembro", "Dezembro"],
                        ]
                        const labels = months[index].map((month) =>
                            month.slice(0, 3).toLowerCase()
                        )
                        return labels[0] + "/" + labels[2]
                    },
                },
            },
            y: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                    color: "#1ea81e",
                    font: {
                        family: "Montserrat",
                        size: 12,
                    },
                },
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
            bar: {
                borderRadius: 1,
            },
        },
    }

    return (
        <div className="h-full w-full">
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart
