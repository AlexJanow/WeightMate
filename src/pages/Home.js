// import ChartBodyweight from "../components/ChartBodyweight";
import ChartBodyweight from "../components/ChartBodyweight";
import ChartExercise from "../components/ChartExercise";
import FirstInputs from "../components/FirstInputs";
import WelcomeMessage from "../components/WelcomeMessage";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import { useState } from "react";
import "./Home.css";

export default function Home({ bwDataCheck, bwDataExist }) {
  const [usernameExist, setUsernameExist] = useState(false);

  const [bodyweightDataArray, setBodyweightDataArray] = useState(() => {
    const saved = getItemsFromLocalStorage("bodyweightDataArray");
    return saved || [];
  });

  return (
    <div className="Home__wrapper">
      <WelcomeMessage setUsernameExist={setUsernameExist} />
      <FirstInputs bwDataExist={bwDataExist} usernameExist={usernameExist} />
      <ChartBodyweight
        bwDataCheck={bwDataCheck}
        bodyweightDataArray={bodyweightDataArray}
      />

      <ChartExercise />
    </div>
  );
}
