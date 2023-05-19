"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

import { Line } from "react-chartjs-2";

const data = {
  labels: [0, "Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Guest",
      data: [100, 200, 150, 250, 500, 400],
      fill: false,
      borderColor: "#E9A0A0",
      lineTension: 0.3,
    },
    {
      label: "User",
      data: [200, 100, 300, 490, 430, 400],
      fill: false,
      borderColor: "#9BDD7C",
      lineTension: 0.3,
    },
  ],
};

const options = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: true,
      beginAtZero: true,
      title: {
        display: false,
      },
      ticks: {
        stepSize: 100,
        suggestedMax: 500,
      },
    },
  },
  layout: {
    padding: {
      top: 20,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
};

const Graph = () => {
  return (
    <div className="w-full   bg-white p-5 rounded-xl">
      <h3 className="text-lg font-bold">Activities</h3>
      <div className="flex justify-between">
        <p className="text-xs">May - June 2021</p>
        <div className="flex text-sm font-bold gap-3">
          <p>Guest</p>
          <p>User</p>
        </div>
      </div>
      <div className="overflow-auto">
        <Line data={data} options={options} height="240px" width="850px" />
      </div>
    </div>
  );
};

export default Graph;
