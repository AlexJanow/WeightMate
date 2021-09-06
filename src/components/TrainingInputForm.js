import React from "react";
import "./TrainingInputForm.css";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export default function TrainingInputForm({
  exId,
  onHandleSaveNewLog,
  exName,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // extract infos from form
    const form = event.target;
    const weight = form.weight.value;
    const repetitions = form.repetitions.value;

    const newSetInput = {
      exId,
      exName,
      setId: uuidv4(),
      date: dayjs().format("DD/MM/YYYY"),
      weight,
      repetitions,
    };

    onHandleSaveNewLog(newSetInput);
  };

  return (
    <form onSubmit={handleSubmit} className="trainingInputForm__wrapper">
      <input
        className="training__weight-input"
        type="number"
        name="weight"
        placeholder="weight in kg"
        autoComplete="off"
        required
      />

      <input
        className="training__repetitions-input"
        type="number"
        name="repetitions"
        placeholder="repetitions"
        autoComplete="off"
        required
      />
      <button className="training__addSet-button">+</button>
    </form>
  );
}
