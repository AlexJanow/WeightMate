import Home from "../pages/Home";
import Bodyweight from "../pages/Bodyweight";
import Training from "../pages/Training";
import Logbook from "../pages/Logbook";
import { Switch, Route } from "react-router";
import "./Main.css";
import SingleExercise from "../pages/SingleExercise";
import { useState } from "react";

export default function Main() {
  const [bodyweightChartDataExist, setBodyweightChartDataExist] =
    useState(false);
  const bodyweightChartDataCheck = (dataSet) => {
    setBodyweightChartDataExist(dataSet.length !== 0);
  };
  return (
    <main>
      <Switch>
        <Route path="/bodyweight">
          <Bodyweight
            bwDataExist={bodyweightChartDataExist}
            bwDataCheck={bodyweightChartDataCheck}
          />
        </Route>
        <Route path="/training/:exerciseId">
          <SingleExercise />
        </Route>
        <Route path="/training">
          <Training />
        </Route>
        <Route path="/logbook">
          <Logbook />
        </Route>
        <Route path="/">
          <Home
            bwDataExist={bodyweightChartDataExist}
            bwDataCheck={bodyweightChartDataCheck}
          />
        </Route>
      </Switch>
    </main>
  );
}
