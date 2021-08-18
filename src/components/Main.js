import Home from "../pages/Home";
import Bodyweight from "../pages/Bodyweight";
import Training from "../pages/Training";
import Logbook from "../pages/Logbook";
import { Switch, Route } from "react-router";
import "./Main.css";
import SingleExercise from "../pages/SingleExercise";

export default function Main() {
  return (
    <main>
      <Switch>
        <Route path="/bodyweight">
          <Bodyweight />
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
          <Home />
        </Route>
      </Switch>
    </main>
  );
}
