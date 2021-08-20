import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { jsonSchema } from "uuidv4";
export default function BodyweightForm() {
  const date = dayjs().format("DD/MM/YYYY");

  const [bodyweightData, setBodyweightData] = useState({
    date,
    weight: "",
  });
  // const [bodyweightDataArray, setBodyweightDataArray] = useState([]);

  const [bodyweightDataArray, setBodyweightDataArray] = useState(() => {
    const saved = localStorage.getItem("bodyweightDataArray");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem("bodyweightDataArray")) || [];
    savedData.push(
      localStorage.setItem(
        "bodyweightDataArray",
        JSON.stringify(bodyweightDataArray)
      )
    );
  }, [bodyweightDataArray]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(e.target.value);
  };
  const handleAdd = () => {
    setBodyweightDataArray((bodyweightDataSets) => [
      ...bodyweightDataSets,
      bodyweightData,
    ]);
  };

  console.log(bodyweightDataArray);
  return (
    <form onSubmit={handleSubmit} className="bodyweight__form-wrapper">
      {/* <label htmlFor="bodyweight__input">Bodyweight in kg</label> */}
      <input
        type="number"
        min="0.1"
        step="0.1"
        className="bodyweight__input"
        name="bodyweight__input"
        required
        width="200"
        placeholder="bodyweigh in kg"
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
