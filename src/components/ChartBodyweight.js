import { Line } from "react-chartjs-2";
import "./ChartBodyweight.css";
import dayjs from "dayjs";

export default function ChartBodyweight() {
  const items = { ...localStorage };

  const dates = Object.entries(items).map(([key, value]) => key);
  const weights = Object.entries(items).map(([key, value]) =>
    JSON.parse(value)
  );

  console.log(items);
  const labels = dates;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bodyweight",
        data: weights,
        fill: {
          target: "origin",
          above: "#10AC84", // Area will be red above the origin
          below: "red", // And blue below the origin
        },
        borderColor: "#fff",
        borderWidth: 2,
        tension: 0.5,
        backgroundColor: "#fff",
      },
    ],
  };

  return (
    <div className="chart__bodyweight">
      <Line data={data} height={200} width={300} />{" "}
    </div>
  );
}
