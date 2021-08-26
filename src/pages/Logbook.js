import LogCard from "../components/LogCard";
import "./Logbook.css";
import { useState } from "react";

export default function Logbook() {
  const regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const workouts = [];
  Object.keys(localStorage).forEach(function (key) {
    if (key.match(regex)) {
      workouts.push(key);
    }
  });
  const handleChange = (e) => {
    setSelectedWorkout(e.target.value);
  };

  return (
    <div>
      <select className="Logbook__select" onChange={(e) => handleChange(e)}>
        <option value="" selected disabled hidden>
          {" "}
          Choose a day
        </option>
        {workouts.map((workout) => (
          <option value={workout}>{workout}</option>
        ))}
      </select>
      <LogCard selectedWorkout={selectedWorkout} />
    </div>
  );
}
