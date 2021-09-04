import { useState, useEffect } from "react";
import addWeightToLocalStorage from "../utils/itemStorage";
import { v4 as uuidv4 } from "uuid";
export default function BodyweightForm({
  bodyweightDataArray,
  setBodyweightDataArray,
  selectedDay,
}) {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(`${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`);
  }, [selectedDay]);

  const [bodyweightData, setBodyweightData] = useState({
    id: "",
    date: "",
    weight: "",
  });

  useEffect(() => {
    addWeightToLocalStorage(bodyweightDataArray);
  }, [bodyweightDataArray]);

  const handleAdd = () => {
    setBodyweightDataArray((bodyweightDataSets) => [
      ...bodyweightDataSets,
      bodyweightData,
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const weightInput = e.target.value;
    handleAdd(weightInput);
  };

  return (
    <form onSubmit={handleSubmit} className="bodyweight__form-wrapper">
      <input
        type="number"
        min="0.1"
        step="0.1"
        className="bodyweight__input"
        name="bodyweight__input"
        required
        placeholder="bodyweight in kg"
        onChange={(e) =>
          setBodyweightData({
            ...bodyweightData,
            id: uuidv4(),
            date: date,
            weight: e.target.value,
          })
        }
      />
      <button className="bodyweight__button" type="submit">
        +
      </button>
    </form>
  );
}
