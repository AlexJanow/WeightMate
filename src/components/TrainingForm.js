import { data } from "browserslist";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function TrainingForm() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const suggestions = result.suggestions;
  const url = `https://wger.de/api/v2/exercise/search/?term=${search}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, [search]);

  return (
    <div className="training__exercise-form">
      {/* <form> */}
      <div className="training__wrapper">
        {/* <label htmlFor="exercise">exercise</label> */}
        <input
          className="training__exercise-input"
          type="text"
          name="exercise"
          placeholder="search for exercise..."
          required
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {/* <label htmlFor="weight">weight</label> */}
        <input
          className="training__weight-input"
          type="number"
          name="weight"
          placeholder="weight in kg"
          required
        />
        <button className="training__weight-button">+</button>
        {/* <label htmlFor="repetitions">repetitions</label> */}
        <input
          className="training__repetitions-input"
          type="number"
          name="repetitions"
          placeholder="repetitions"
          required
        />
        <button className="training__repititions-button">+</button>
        {/* </form> */}
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
