import { Line } from "react-chartjs-2";
import "./ChartBodyweight.css";
import { useState, useEffect } from "react";

export default function ChartBodyweight({ bodyweightDataArray, bwDataCheck }) {
  const [dates, setDates] = useState([]);
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    if (bodyweightDataArray) {
      bodyweightDataArray
        .slice(Math.max(bodyweightDataArray.length - 10, 0))
        .map((data) => setDates((elements) => [...elements, data.date]));
      bodyweightDataArray
        .slice(Math.max(bodyweightDataArray.length - 10, 0))
        .map((data) => setWeights((elements) => [...elements, data.weight]));
    }

    return function cleanup() {
      setDates([]);
      setWeights([]);
    };
  }, [bodyweightDataArray]);

  useEffect(() => {
    if (bodyweightDataArray) bwDataCheck(bodyweightDataArray);
  }, [bodyweightDataArray]);

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
      {weights.length !== 0 && <Line data={data} height={200} width={300} />}
    </div>
  );
}
