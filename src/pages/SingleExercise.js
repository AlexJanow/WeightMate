import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleExerciseAccordion from "../components/SingleExerciseAccordion";

import "./SingleExercise.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "1%",
  },
  heading: {
    margin: "auto",
  },
}));
export default function SingleExercise() {
  const classes = useStyles();
  const [exerciseData, setExerciseData] = useState("");
  const [isActive, setIsActive] = useState("false");
  const { exerciseId } = useParams();

  useEffect(() => {
    const url = `https://wger.de/api/v2/exerciseinfo/${exerciseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setExerciseData(data);
      });
  }, [exerciseId]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="singleExercise__wrapper">
      <div className="singleExercise__name">
        <h2>{exerciseData.name}</h2>
      </div>
      {isActive && (
        <div className="singleExercise__img">
          <img
            src={exerciseData?.images ? exerciseData?.images[0]?.image : null}
          />
          <img
            src={exerciseData?.images ? exerciseData?.images[1]?.image : null}
          />
        </div>
      )}
      {isActive && (
        <SingleExerciseAccordion
          classes={classes}
          exerciseData={exerciseData}
        />
      )}
      <button onClick={handleToggle} className="singleExercise__button-train">
        {!isActive ? "show info" : "train exercise"}
      </button>
    </div>
  );
}
