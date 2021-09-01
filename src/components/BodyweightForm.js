import { useState, useEffect } from "react";
import dayjs from "dayjs";
import addWeightToLocalStorage from "../utils/itemStorage";
import { v4 as uuidv4 } from "uuid";
export default function BodyweightForm({
  bodyweightDataArray,
  setBodyweightDataArray,
}) {
  const date = dayjs().format("DD/MM/YYYY");

  const [bodyweightData, setBodyweightData] = useState({
    id: uuidv4(),
    date,
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
        // width="200"
        placeholder="bodyweight in kg"
        onChange={(e) =>
          setBodyweightData({ ...bodyweightData, weight: e.target.value })
        }
      />
      <button className="bodyweight__button" type="submit">
        +
      </button>
    </form>
  );
}
