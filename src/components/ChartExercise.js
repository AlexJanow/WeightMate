import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { getExerciseNameFromLocalStorage } from "../utils/itemStorage";
export default function ChartExercise() {
  const [dates, setDates] = useState([]);
  const [maxVolume, setMaxVolume] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState("");

  const dataSet = JSON.parse(localStorage.getItem("bodyweightDataArray"));

  //   const exercises = [];
  // Object.keys(localStorage).forEach(function (key) {
  //   if (key.match(regexIsNumber)) {
  //     exercises.push(key);
  //     }
  //   });
  const exercises = [];
  Object.keys(localStorage).map((key) => {
    if (!isNaN(key)) {
      if (JSON.parse(localStorage.getItem(key)).length !== 0)
        exercises.push(JSON.parse(localStorage.getItem(key)));
    }
  });
  console.log(exercises);
  const handleChange = (e) => {
    setSelectedExercise(e.target.value);
  };
  //   const exerciseName = () => {
  //     const exName = getExerciseNameFromLocalStorage();
  //     return exName[0].exName;
  //   };

  return (
    <div>
      <select
        defaultValue={"DEFAULT"}
        className="Logbook__select"
        onChange={handleChange}
      >
        <option value="DEFAULT" disabled hidden>
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
    </div>
  );
}
