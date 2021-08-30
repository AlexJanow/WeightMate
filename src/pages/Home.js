import ChartBodyweight from "../components/ChartBodyweight";
import ChartExercise from "../components/ChartExercise";
import FirstInputs from "../components/FirstInputs";
import WelcomeMessage from "../components/WelcomeMessage";
import { useState } from "react";
import "./Home.css";
export default function Home() {
  const [usernameExist, setUsernameExist] = useState(false);
  const [bodyweightChartDataExist, setBodyweightChartDataExist] =
    useState(false);

  return (
    <div className="Home__wrapper">
      <WelcomeMessage setUsernameExist={setUsernameExist} />
      <FirstInputs
        bodyweightChartDataExist={bodyweightChartDataExist}
        usernameExist={usernameExist}
      />
      <ChartBodyweight
        setBodyweightChartDataExist={setBodyweightChartDataExist}
        bodyweightChartDataExist={bodyweightChartDataExist}
      />
      <ChartExercise />
    </div>
  );
}
