import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleExerciseAccordion from "../components/SingleExerciseAccordion";
import dayjs from "dayjs";
import "./SingleExercise.css";
import TrainingInputForm from "../components/TrainingInputForm";
import TrainingResultsRender from "../components/TrainingResultsRender";

import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const todayDate = dayjs().format("DD/MM/YYYY");
  const classes = useStyles();
  const [exerciseData, setExerciseData] = useState("");

  const [isActive, setIsActive] = useState(
    localStorage.getItem("isActive") === "false"
  );
  const { exerciseId } = useParams();

  const [exerciseLog, setExerciseLog] = useState([]);

  const [addToTraining, setAddToTraining] = useState([]);

  function handleSaveNewLog(newLog) {
    setExerciseLog([...exerciseLog, newLog]);
  }
  const exerciseName = exerciseData.name;

  useEffect(() => {
    const url = `https://wger.de/api/v2/exerciseinfo/${exerciseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setExerciseData(data);
      });
  }, [exerciseId]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem(exerciseId)) || [];
    setExerciseLog(localStorageData);
  }, [exerciseId]);

  useEffect(() => {
    localStorage.setItem(exerciseId, JSON.stringify(exerciseLog));
  }, [exerciseLog, exerciseId]);

  const handleToggle = () => {
    setIsActive(!isActive);
    let acuteToggle = isActive;
    localStorage.setItem("isActive", acuteToggle);
  };

  //add to training by date
  const addTraining = () => {
    const exerciseToday = exerciseLog.filter(
      (exercise) => exercise.date === todayDate
    );
    setAddToTraining(exerciseToday);
  };

  const handleAddExercise = () => {
    addTraining();
  };

  useEffect(() => {
    // only store new ones, if the setId is already is already there
    const setsFromToday = JSON.parse(localStorage.getItem(todayDate)) || [];
    const setIdsFromToday = setsFromToday.map((exercise) => exercise.setId);

    const newSets = addToTraining.filter((set) => {
      return !setIdsFromToday.includes(set.setId);
    });
    if (newSets.length > 0) {
      localStorage.setItem(
        todayDate,
        JSON.stringify([...setsFromToday, ...newSets])
      );
      history.push("/training");
    }
  }, [addToTraining, todayDate, history]);

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
          onHandleSaveNewLog={handleSaveNewLog}
          exId={exerciseId}
          exName={exerciseName}
        />
      )}
      {!isActive && <TrainingResultsRender data={exerciseLog} />}
      {!isActive && (
        <button
          onClick={handleAddExercise}
          className="singleExercise__button-finish"
        >
          finish exercise
        </button>
      )}
    </div>
  );
}
