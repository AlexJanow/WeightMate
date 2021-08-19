import { Line } from "react-chartjs-2";
import "./ChartBodyweight.css";

export default function ChartBodyweight() {
  // const items = { ...localStorage };

  // const dates = Object.entries(items).map(([key, value]) => key);
  // const weights = Object.entries(items).map(([key, value]) =>
  //   JSON.parse(value)
  // );

  const dataSet = JSON.parse(localStorage.getItem("bodyweightDataArray"));
  const dates = dataSet.map((d) => d.date);
  const weights = dataSet.map((w) => w.weight);

  const labels = dates;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bodyweight",
        data: weights,
        fill: {
          target: "origin",
          above: "#10AC84",
          below: "red",
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
