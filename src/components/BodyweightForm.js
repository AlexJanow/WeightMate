import { useState, useEffect } from "react";
import dayjs from "dayjs";
export default function BodyweightForm() {
  const date = dayjs().format("DD/MM/YYYY");

  const [bodyweight, setBodyweight] = useState(() => {
    const saved = localStorage.getItem(date);
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem(date, JSON.stringify(bodyweight));
  }, [bodyweight]);

  return (
    <form>
      <label htmlFor="bodyweight__input">Bodyweight in kg</label>
      <input
        type="number"
        className="bodyweight__input"
        name="bodyweight__input"
        required
        width="200"
        placeholder="...kg"
        value={bodyweight}
        onChange={(e) => setBodyweight(e.target.value)}
      />
      <button className="bodyweight__button" type="submit">
        +
      </button>
    </form>
  );
}
