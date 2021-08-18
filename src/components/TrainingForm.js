import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function TrainingForm() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  // const [selected, setSelected] = useState("")
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
        {/* <label htmlFor="exercise">Search for exercise</label> */}
        <input
          className="training__exercise-input"
          type="text"
          name="exercise"
          placeholder="search for exercise..."
          required
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {/* </form> */}{" "}
        {/* <select className="training__exercise-select">
          <option value="Arms">Arms</option>
          <option value="Legs">Legs</option>
          <option value="Abs">Abs</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Calves">Calves</option>
        </select> */}
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
