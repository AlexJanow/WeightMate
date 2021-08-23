import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleExerciseAccordion from "../components/SingleExerciseAccordion";

import dayjs from "dayjs";
import "./SingleExercise.css";
import TrainingInputForm from "../components/TrainingInputForm";
import TrainingResultsRender from "../components/TrainingResultsRender";

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
  const date = dayjs().format("DD/MM/YYYY");
  const classes = useStyles();
  const [exerciseData, setExerciseData] = useState("");
  // const [isActive, setIsActive] = useState("false");
  const [isActive, setIsActive] = useState(
    localStorage.getItem("isActive") === "false"
  );
  const { exerciseId } = useParams();
  const [sets, setSets] = useState([]);

  const exerciseName = exerciseData.name;

  useEffect(() => {
    const url = `https://wger.de/api/v2/exerciseinfo/${exerciseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setExerciseData(data);

        console.log(data);
      });
  }, [exerciseId]);

  const handleToggle = () => {
    setIsActive(!isActive);
    let acuteToggle = isActive;
    localStorage.setItem("isActive", acuteToggle);
  };
  const [trainingData, setTrainingData] = useState({
    exId: exerciseId,
    exName: exerciseName,
    setId: "",
    date,
    weight: "",
    repetitions: "",
  });
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
      {!isActive && (
        <TrainingInputForm
          sets={sets}
          setSets={setSets}
          setTrainingData={setTrainingData}
          trainingData={trainingData}
          exerciseId={exerciseId}
          exerciseName={exerciseName}
          setIsActive={setIsActive}
        />
      )}
      {!isActive && (
        <TrainingResultsRender exerciseId={exerciseId} sets={sets} />
      )}
    </div>
  );
}
