import React from "react";

export default function LogCard() {
  const regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  const newArr = [];

  Object.keys(localStorage).forEach(function (key) {
    if (key.match(regex)) {
      const workout = JSON.parse(localStorage.getItem(key));
      console.log(workout[0]);
      const title = key;
      const item = workout.map((exercise) => {
        return (
          <li className="LogCard__card">
            <h3>{title}</h3>
            <p>{exercise.exName}</p>
            {/* <p>{exercise.exName}</p>
            <p>{exercise.weight} kg</p>
            <p>{exercise.repetitions} x</p> */}
          </li>
        );
      });
      newArr.push(item);
    }
  });

  return <ul className="LogCard__wrapper">{newArr}</ul>;
}
