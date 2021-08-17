import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SingleExercise.css";
export default function SingleExercise() {
  const [exerciseData, setExerciseData] = useState("");

  const { exerciseId } = useParams();

  useEffect(() => {
    const url = `https://wger.de/api/v2/exerciseinfo/${exerciseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setExerciseData(data);
      });
  }, [exerciseId]);

  return (
    <div className="singleExercise__wrapper">
      <div className="singleExercise__name">
        <h2>{exerciseData.name}</h2>
      </div>
      <div className="singleExercise__img">
        <img
          src={exerciseData?.images ? exerciseData?.images[0]?.image : null}
        />
        <img
          src={exerciseData?.images ? exerciseData?.images[1]?.image : null}
        />
      </div>
      <div className="singleExercise__description">
        {exerciseData && exerciseData.description.replace(/(<([^>]+)>)/gi, "")}
      </div>
      <div className="singleExercise__variations">
        Variations:
        <ol>
          {exerciseData &&
            exerciseData.variations.map((exercise, index) => {
              return (
                <li className="singleExercise__li" key={index}>
                  <Link className="Link" to={`/training/${exercise}`}>
                    {exercise}
                  </Link>
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}
