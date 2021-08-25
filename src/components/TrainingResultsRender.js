import React from "react";
import dayjs from "dayjs";

export default function TrainingResultsRender({ data }) {
  const todayDate = dayjs().format("DD/MM/YYYY");
  console.log(todayDate);
  return (
    <ol className="singleExercise__trainingInputForm-display">
      {data
        .filter((data) => data.date === todayDate)
        .map((set, index) => {
          console.log(set);

          return (
            <li
              key={set.setId}
              className="singleExercise__trainingInputForm-display-li"
            >
              {set.weight} kg {set.repetitions} x
            </li>
          );
        })}
    </ol>
  );
}
