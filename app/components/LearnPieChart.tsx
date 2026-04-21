"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Used Learn", "No Learn"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#ff4d88", "#ffd6e8"],
      borderColor: ["#ffffff", "#ffffff"],
      borderWidth: 2,
    },
  ],
};

const options: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    tooltip: {
      enabled: true,
    },
  },
  animation: {
    animateRotate: true,
    animateScale: true,
    duration: 1200,
    // key change: cast easing to the allowed union type
    easing: "easeOutCubic",
  },
};

export function LearnPieChart() {
  return (
    <div
      style={{
        maxWidth: 380,
        margin: "0 auto",
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
}