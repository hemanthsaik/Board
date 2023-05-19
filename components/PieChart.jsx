"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [14, 33, 55],
        backgroundColor: ["#EE8484", "#F7DC7D", "#98D89E"],
        borderColor: ["#EE8484", "#F7DC7D", "#98D89E"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full">
      <Pie
        data={data}
        options={{ responsive: false }}
        height={150}
        width={200}
      />
    </div>
  );
};

export default PieChart;
