import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToolTipsSearchExercise } from "../utils/ToolTips";

export default function TrainingForm() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  // const [selected, setSelected] = useState("")
  const suggestions = result.suggestions;
  const url = `https://wger.de/api/v2/exercise/search/?term=${search}`;

  useEffect(() => {
    if (search) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setResult(data);
        });
    }
  }, [search, url]);

  return (
    <div className="training__exercise-form">
      <div className="training__wrapper">
        <ToolTipsSearchExercise />
        <label className="training__exercise-input-label" htmlFor="exercise">
          Search for exercise
        </label>
        <input
          className="training__exercise-input"
          type="text"
          name="exercise"
          placeholder="bench press,pull-up..."
          required
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <ul>
        {suggestions
          ? suggestions.map((exercise) => {
              return (
                <li className="training__result-li" key={exercise.data.id}>
                  <Link className="Link" to={`/training/${exercise.data.id}`}>
                    {exercise.value}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
