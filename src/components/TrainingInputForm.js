import React from "react";
import "./TrainingInputForm.css";
export default function TrainingInputForm() {
  return (
    <div className="trainingInputForm__wrapper">
      <input
        className="training__weight-input"
        type="number"
        name="weight"
        placeholder="weight in kg"
        required
      />
      <button className="training__weight-button">+</button>

      <input
        className="training__repetitions-input"
        type="number"
        name="repetitions"
        placeholder="repetitions"
        required
      />
      <button className="training__repititions-button">+</button>
    </div>
  );
}
