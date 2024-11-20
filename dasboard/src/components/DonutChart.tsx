import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const DonutChart = () => {
  <canvas id="myChart" width="400" height="400"></canvas>;
  const data = {
    labels: ["KEB Hana Bank", "Mandiri", "BTN", "Artha Graha", "BRI"],
    datasets: [
      {
        label: "Bank Approval Percentage",
        data: [10, 15, 20, 25, 30], // Corresponds to the percentage
        backgroundColor: [
          "#6150C1", // KEB Hana Bank (purple)
          "#146C94", // Mandiri (blue)
          "#51C4E9", // BTN (cyan)
          "#1FFFE1", // Artha Graha (light cyan)
          "#4A3764",
        ],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "60%", // To create a donut chart
    plugins: {
      legend: {
        display: false, // Hide legend for custom labels
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<"doughnut">) =>
            `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md w-full mb-6  rounded-lg  mx-auto">
      <h2 className="text-xl font-bold mb-6 text-center">
        Top 5 Bank Approval Tertinggi
      </h2>

      <div className="flex gap-4 m-auto w-full justify-center mt-4">
        <div className="flex flex-col gap-7 self-center ">
          <div>
            <p className="text-sm font-bold text-[#6150C1]">
              {data.datasets[0].data[0]}%
            </p>
            <p className="text-sm text-gray-500">{data.labels[0]}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-[#146C94]">
              {data.datasets[0].data[1]}%
            </p>
            <p className="text-sm text-gray-500">{data.labels[1]}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-[#51C4E9]">
              {data.datasets[0].data[2]}%
            </p>
            <p className="text-sm text-gray-500">{data.labels[2]}</p>
          </div>
        </div>
        <div className="  flex justify-center  h-64">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col gap-7 self-center ">
          <div>
            <p className="text-sm font-bold text-[#6150C1]">
              {data.datasets[0].data[3]}%
            </p>
            <p className="text-sm text-gray-500">{data.labels[3]}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-[#146C94]">
              {data.datasets[0].data[4]}%
            </p>
            <p className="text-sm text-gray-500">{data.labels[4]}</p>
          </div>
        </div>
      </div>
      {/* Custom Labels */}
    </div>
  );
};

export default DonutChart;
