import ChartBodyweight from "../components/ChartBodyweight";
import ChartExercise from "../components/ChartExercise";
import FirstInputs from "../components/FirstInputs";
import WelcomeMessage from "../components/WelcomeMessage";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import { useState, useEffect } from "react";
import "./Home.css";

export default function Home({ bwDataCheck, bwDataExist }) {
  const [usernameExist, setUsernameExist] = useState(false);
  const [exerciseExist, setExerciseExist] = useState(false);
  const [bodyweightDataArray, setBodyweightDataArray] = useState(() => {
    const saved = getItemsFromLocalStorage("bodyweightDataArray");
    return saved || [];
  });

  useEffect(() => {
    Object.keys(localStorage).forEach((key) => {
      if (!isNaN(key)) {
        if (JSON.parse(localStorage.getItem(key)).length !== 0)
          setExerciseExist(!exerciseExist);
      }
    });
  }, []);
  return (
    <div className="Home__wrapper">
      <WelcomeMessage setUsernameExist={setUsernameExist} />
      <FirstInputs
        bwDataExist={bwDataExist}
        usernameExist={usernameExist}
        exerciseExist={exerciseExist}
      />
      <ChartBodyweight
        bwDataCheck={bwDataCheck}
        bodyweightDataArray={bodyweightDataArray}
      />

      <ChartExercise exerciseExist={exerciseExist} />
    </div>
  );
}
