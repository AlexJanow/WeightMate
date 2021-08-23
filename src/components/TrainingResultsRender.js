import React from "react";
import { v4 as uuidv4 } from "uuid";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import { useEffect } from "react";

export default function TrainingResultsRender({ exerciseId }) {
  const data = getItemsFromLocalStorage(exerciseId);

  return (
    <ol className="singleExercise__trainingInputForm-display">
      {data.map((set, index) => {
        console.log(set);

        return (
          <li
            key={uuidv4()}
            className="singleExercise__trainingInputForm-display-li"
          >
            {set.weight} kg {set.repetitions} x
          </li>
        );
      })}
    </ol>
  );
}
