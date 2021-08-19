import React from "react";
import "./TrainingInputForm.css";

export default function TrainingInputForm({
  sets,
  setSets,
  setTrainingData,
  trainingData,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(e.target.value);
  };
  const handleAdd = () => {
    setSets((sets) => [...sets, trainingData]);
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
