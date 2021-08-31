import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "./ChartExercise.css";

export default function ChartExercise({ exercisesExist }) {
  const [dates, setDates] = useState([]);
  const [maxWeight, setMaxWeight] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState("");
  const exercises = [];
  Object.keys(localStorage).forEach((key) => {
    if (!isNaN(key)) {
      if (JSON.parse(localStorage.getItem(key)).length !== 0)
        exercises.push(JSON.parse(localStorage.getItem(key)));
    }
  });

  const handleChange = (e) => {
    setSelectedExercise(e.target.value);
  };

  useEffect(() => {
    setDates([]);
    setMaxWeight([]);
    const dataSet = JSON.parse(localStorage.getItem(selectedExercise));

    dataSet?.map((data) => setDates((elements) => [...elements, data.date]));

    dataSet?.map((set) => {
      if (set.repetitions <= 9) {
        setMaxWeight((elements) => [
          ...elements,
          set?.weight * (36 / (37 - set.repetitions)),
        ]);
      }
      if (set.repetitions > 9) {
        setMaxWeight((elements) => [
          ...elements,
          set?.weight * (1 + 0.0333 * set.repetitions),
        ]);
      }
    });
  }, [selectedExercise]);

  const labels = dates;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Maximum weight",
        data: maxWeight,
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
    <div>
      {exercises.length !== 0 && (
        <select
          defaultValue={"DEFAULT"}
          className="Logbook__select"
          onChange={handleChange}
        >
          <option value={"DEFAULT"} disabled hidden>
            Choose an exercise
          </option>

          {exercises.map((exercise) => {
            return (
              <option key={exercise[0].exId} value={exercise[0].exId}>
                {exercise[0].exName}
              </option>
            );
          })}
        </select>
      )}
      {exercises.length !== 0 && (
        <Line
          className="chart__exercise"
          data={data}
          height={200}
          width={300}
        />
      )}
    </div>
  );
}
