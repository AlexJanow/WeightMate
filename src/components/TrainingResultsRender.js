import React from "react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function TrainingResultsRender({ data, maxRM, setMaxRM }) {
  const todayDate = dayjs().format("DD/MM/YYYY");
  const sets = [];
  const maximumWeight = (repetitions, weight) => {
    if (repetitions <= 9) {
      const result = weight * (36 / (37 - repetitions));
      return result;
    } else if (repetitions > 9) {
      const result = weight * (1 + 0.0333 * repetitions);
      return result;
    }
  };

  const getMaxOfArray = (array) => {
    return Math.max.apply(null, array);
  };

  useEffect(() => {
    setMaxRM(getMaxOfArray(sets));
  }, [sets]);

  return (
    <div className="singleExercise__trainingInputForm-display-wrapper">
      <ol className="singleExercise__trainingInputForm-display">
        {data
          .filter((data) => data.date === todayDate)
          .map((set, index) => {
            sets.push(maximumWeight(set.repetitions, set.weight));
            return (
              <li
                key={set.setId}
                className={`singleExercise__trainingInputForm-display-li ${
                  maxRM === maximumWeight(set.repetitions, set.weight)
                    ? "pr"
                    : null
                }`}
              >
                {set.weight} kg {set.repetitions} x{" "}
                {maxRM === maximumWeight(set.repetitions, set.weight)
                  ? "PR!"
                  : null}
              </li>
            );
          })}
      </ol>
    </div>
  );
}
