import LogCard from "../components/LogCard";
import "./Logbook.css";
import { useState } from "react";

export default function Logbook() {
  // following regex is checking format is dd/mm/yyyy
  const regexIsDate =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const workouts = [];
  Object.keys(localStorage).forEach(function (key) {
    if (key.match(regexIsDate)) {
      workouts.push(key);
    }
  });
  const handleChange = (e) => {
    setSelectedWorkout(e.target.value);
  };

  return (
    <div>
      <div className="Logbook__select-labelwrap">
        <label className="Logbook__select-label" htmlFor="Logbook__select">
          Choose a training day
        </label>
      </div>
      <select
        defaultValue={"DEFAULT"}
        className="Logbook__select"
        onChange={handleChange}
        name="Logbook__select"
      >
        <option value="DEFAULT" disabled hidden>
          Choose a day
        </option>
        {workouts.map((workout) => (
          <option key={workout} value={workout}>
            {workout}
          </option>
        ))}
      </select>
      <LogCard selectedWorkout={selectedWorkout} />
    </div>
  );
}
