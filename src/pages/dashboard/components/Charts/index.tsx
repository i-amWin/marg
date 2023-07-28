import { ChangeEvent, useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const barChartSaleData = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ],
  datasets: [
    {
      label: "Sale Bill",
      data: [
        10640.14, 15070.15, 135451.32, 18429.02, 22690.12, 6319.98, 8123.49,
        242700.77, 86793.75, 6226.11, 174145.72, 66376.25,
      ],
    },
  ],
};

const barChartPurchaseData = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ],
  datasets: [
    {
      label: "Purchase Bill",
      data: [
        242700.77, 86793.75, 6226.11, 174145.72, 66376.25, 10640.14, 15070.15,
        135451.32, 18429.02, 22690.12, 6319.98, 8123.49,
      ],
    },
  ],
};

const lineChartData = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ],
  datasets: [
    {
      label: "In Flow",
      data: [
        3011848.67, 15553, 143146, 292730, 25145, 126795, 8659, 263211, 97641,
        6767.99, 183203, 65681,
      ],
      borderColor: "#ff6384",
      pointBorderColor: "white",
      pointBorderWidth: 2,
    },
    {
      label: "Out Flow",
      data: [
        10000, 5114, 8820, 112498, 8866, 5234, 152359, 106783, 387850, 300938,
        0, 74680,
      ],
      borderColor: "#36a2eb",
      pointBorderColor: "white",
      pointBorderWidth: 2,
    },
  ],
};

export default function Charts() {
  const [chartData, setChartData] = useState("sale");

  function handleChartData(e: ChangeEvent<HTMLSelectElement>) {
    setChartData(e.target.value);
  }

  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between text-black mb-2">
          <h2 className="text-lg font-semibold relative after:w-1/2 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:left-0">
            Transaction
          </h2>
          <select
            className="px-2 rounded border border-gray-300 bg-transparent focus:bg-yellow-300"
            value={chartData}
            onChange={(e) => handleChartData(e)}
          >
            <option value="sale">Sale</option>
            <option value="purchase">Purchase Year</option>
          </select>
        </div>
        <div>
          <BarChart
            data={
              chartData === "sale" ? barChartSaleData : barChartPurchaseData
            }
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between text-black mb-2">
          <h2 className="text-lg font-semibold relative after:w-1/2 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:left-0">
            Cash Flow
          </h2>
        </div>
        <div>
          <LineChart data={lineChartData} />
        </div>
      </div>
    </>
  );
}
