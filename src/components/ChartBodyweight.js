import { Line } from "react-chartjs-2";
import "./ChartBodyweight.css";
import dayjs from "dayjs";

export default function ChartBodyweight() {
  const labels = [1, 2, 3, 4, 5, 6, 7];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bodyweight",
        data: [95, 92, 94, 91, 96, 95, 105],
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
