import React from "react";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import "./LogCard.css";
export default function LogCard({ selectedWorkout }) {
  const workout = getItemsFromLocalStorage(selectedWorkout);

  return (
    <ul className={selectedWorkout ? "LogCard__wrapper" : ""}>
      <li>
        <h3 className="LogCard__title"> {selectedWorkout}</h3>
        {workout.map((set) => {
          return (
            <p key={set.setId}>
              {set.exName} {set.weight} kg {set.repetitions} x
            </p>
          );
        })}
      </li>
    </ul>
  );
}
