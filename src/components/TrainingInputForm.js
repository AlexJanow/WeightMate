import React from "react";
import "./TrainingInputForm.css";
import { useState } from "react";
import { useParams } from "react-router";
export default function TrainingInputForm() {
  const { exerciseId } = useParams();

  const [trainingData, setTrainingData] = useState({
    Id: exerciseId,
    weight: "",
    repetitions: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(trainingData);
  };

  return (
    <form onSubmit={handleSubmit} className="trainingInputForm__wrapper">
      <input
        onChange={(e) =>
          setTrainingData({ ...trainingData, weight: e.target.value })
        }
        value={trainingData.weight}
        className="training__weight-input"
        type="number"
        name="weight"
        placeholder="weight in kg"
        required
      />

      {/* //Maybe only one button is needed
       <button className="training__weight-button">+</button> */}

      <input
        onChange={(e) =>
          setTrainingData({ ...trainingData, repetitions: e.target.value })
        }
        value={trainingData.repetitions}
        className="training__repetitions-input"
        type="number"
        name="repetitions"
        placeholder="repetitions"
        required
      />
      <button className="training__repititions-button">+</button>
    </form>
  );
}
