import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleExerciseAccordion from "../components/SingleExerciseAccordion";
import dayjs from "dayjs";
import "./SingleExercise.css";
import TrainingInputForm from "../components/TrainingInputForm";
import TrainingResultsRender from "../components/TrainingResultsRender";
import { ToolTipsRepetitionCalculation } from "../utils/ToolTips";
import { useHistory } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: ".2em",
  },
  heading: {
    margin: "auto",
    fontSize: "1.2rem",
    fontFamily: ['"Rubik'],
  },
  variations: {
    width: "100%",
  },
  description: {
    textAlign: "left",
  },
}));
export default function SingleExercise({ addFavourite, favourites }) {
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
  const [maxRM, setMaxRM] = useState([]);

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

  const [favData, setFavData] = useState({
    id: "",
    name: "",
  });
  useEffect(() => {
    setFavData({ id: exerciseId, name: exerciseName });
  }, [exerciseName, exerciseId]);

  const [isFavourited, setIsFavourited] = useState("");
  const handleFavToggle = () => {
    setIsFavourited(!isFavourited);
  };

  return (
    <div className="singleExercise__wrapper">
      <button
        className="singleExercise__favToggle"
        onClick={() => {
          addFavourite(favData);
          handleFavToggle();
        }}
      >
        {favourites.some((fav) => fav.id === exerciseId) ? (
          <AiFillHeart className="singleExercise__favToggle-Icon" />
        ) : (
          <AiOutlineHeart className="singleExercise__favToggle-Icon" />
        )}
      </button>
      <div className="singleExercise__name">
        <h2>{exerciseData.name}</h2>
      </div>
      {isActive && (
        <div className="singleExercise__img">
          <img
            src={exerciseData?.images ? exerciseData?.images[0]?.image : null}
            alt=""
          />
          <img
            src={exerciseData?.images ? exerciseData?.images[1]?.image : null}
            alt=""
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

      {!isActive &&
        !(
          maxRM === Number.POSITIVE_INFINITY ||
          maxRM === Number.NEGATIVE_INFINITY
        ) && (
          <div className="singleExercise__repetition-table-wrapper">
            <ToolTipsRepetitionCalculation />
            <label
              className="singleExercise__repetition-table-label"
              htmlFor="repetition-table"
            >
              Repetition Calculation
            </label>
            <table
              name="repetition-table"
              className="singleExercise__repetition-table"
            >
              <tbody>
                <tr>
                  <th>rep.</th>
                  <th>1</th>
                  <th>3</th>
                  <th>5</th>
                  <th>8</th>
                  <th>10</th>
                  <th>12</th>
                </tr>
                <tr>
                  <th>kg</th>
                  <th>{(maxRM * 1).toFixed(0)}</th>
                  <th>{(maxRM * 0.94).toFixed(0)}</th>
                  <th>{(maxRM * 0.89).toFixed(0)}</th>
                  <th>{(maxRM * 0.81).toFixed(0)}</th>
                  <th>{(maxRM * 0.75).toFixed(0)}</th>
                  <th>{(maxRM * 0.71).toFixed(0)}</th>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      {!isActive && (
        <TrainingInputForm
          onHandleSaveNewLog={handleSaveNewLog}
          exId={exerciseId}
          exName={exerciseName}
        />
      )}
      {!isActive && (
        <TrainingResultsRender
          maxRM={maxRM}
          setMaxRM={setMaxRM}
          data={exerciseLog}
        />
      )}
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
