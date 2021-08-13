import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TrainingRenderExercise({ result }) {
  const [exercises, setExercises] = useState([]);

  const results = result.suggestions;

  console.log(results);

  return results
    ? results.map((exercise, index) => {
        return (
          <li className="training__result-li" key={index}>
            <Link className="Link" to={`/training/${exercise.data.id}`}>
              {exercise.value}
            </Link>
          </li>
        );
      })
    : null;
}
