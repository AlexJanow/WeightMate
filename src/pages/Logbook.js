import LogCard from "../components/LogCard";
import "./Logbook.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Logbook() {
  // following regex is checking format is dd/mm/yyyy
  const regexIsDate =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const workouts = [];
    Object.keys(localStorage).forEach(function (key) {
      if (key.match(regexIsDate)) {
        workouts.push(key);
      }
    });
    setWorkouts(workouts);
    setSelectedWorkout(workouts[workouts.length - 1]);
  }, []);

  const handleChange = (e) => {
    setSelectedWorkout(e.target.value);
  };
  console.log(selectedWorkout);
  return (
    <div>
      {workouts.length !== 0 && (
        <div className="Logbook__select-labelwrap">
          <label className="Logbook__select-label" htmlFor="Logbook__select">
            Choose a training day
          </label>
        </div>
      )}
      {workouts.length !== 0 && (
        <select
          className="Logbook__select"
          onChange={handleChange}
          name="Logbook__select"
        >
          <option
            value={workouts[workouts.length - 1]}
            selected
            disabled
            hidden
          >
            {workouts[workouts.length - 1]}
          </option>
          {workouts.map((workout) => (
            <option key={workout} value={workout}>
              {workout}
            </option>
          ))}
        </select>
      )}
      <LogCard selectedWorkout={selectedWorkout} />
      {workouts.length === 0 && (
        <div>
          {" "}
          <h3 className="Logbook__exercise-info">
            Finish exercises to add them to your workouts.
          </h3>
          <Link className="Link" to="/training">
            <p className="Logbook__exercise-button">Exercises</p>
          </Link>
        </div>
      )}
    </div>
  );
}
