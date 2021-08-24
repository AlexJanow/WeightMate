import React from "react";
export default function TrainingResultsRender({ data }) {
  return (
    <ol className="singleExercise__trainingInputForm-display">
      {data.map((set, index) => {
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
