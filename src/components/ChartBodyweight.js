import { Line } from "react-chartjs-2";
import "./ChartBodyweight.css";
import { useState } from "react";
export default function ChartBodyweight() {
  const [dates, setDates] = useState([]);
  const [weights, setWeights] = useState([]);
  // const items = { ...localStorage };

  // const dates = Object.entries(items).map(([key, value]) => key);
  // const weights = Object.entries(items).map(([key, value]) =>
  //   JSON.parse(value)
  // );

  const dataSet = localStorage.getItem("bodyweightDataArray");
  // if (dataSet) {
  //   setDates(Object.keys(dataSet).map((d) => JSON.parse(d)));
  //   setWeights(Object.keys(dataSet).map((w) => JSON.parse(w)));
  // }
  // console.log(Object.keys(dataSet));
  // const dates = Object.keys(dataSet).map((d) => JSON.parse(d.dates));
  // const weights = Object.keys(dataSet).map((w) => JSON.parse(w.weights));
  // console.log(dataSet);
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
