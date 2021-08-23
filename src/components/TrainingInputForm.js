import React from "react";
import { addItemtoLocalStorage } from "../utils/itemStorage";
import "./TrainingInputForm.css";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TrainingInputForm({
  sets,
  setSets,
  setTrainingData,
  trainingData,
  exerciseName,
  setIsActive,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd(e.target.value);
  };
  const handleAdd = () => {
    setSets((sets) => [...sets, trainingData]);
  };

  useEffect(() => {
    if (sets.length !== 0) addItemtoLocalStorage(trainingData.exId, sets);
  }, [sets]);

  return (
    <form onSubmit={handleSubmit} className="trainingInputForm__wrapper">
      <input
        onChange={(e) =>
          setTrainingData({
            ...trainingData,
            setId: uuidv4(),
            exName: exerciseName,
            weight: e.target.value,
          })
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
          setTrainingData({
            ...trainingData,
            setId: uuidv4(),
            exName: exerciseName,
            repetitions: e.target.value,
          })
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
