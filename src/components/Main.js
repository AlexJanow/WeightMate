import Home from "../pages/Home";
import Bodyweight from "../pages/Bodyweight";
import Training from "../pages/Training";
import Logbook from "../pages/Logbook";
import { Switch, Route } from "react-router";
import "./Main.css";
import SingleExercise from "../pages/SingleExercise";
import { useState, useEffect } from "react";
import Favourites from "../pages/Favourites";

export default function Main() {
  const [favourites, setFavourites] = useState([]);

  const [bodyweightChartDataExist, setBodyweightChartDataExist] =
    useState(false);
  const bodyweightChartDataCheck = (dataSet) => {
    setBodyweightChartDataExist(dataSet.length !== 0);
  };
  const addFavourite = (newFavourite) => {
    if (!favourites.includes(newFavourite)) {
      setFavourites((favourites) => [...favourites, newFavourite]);
    } else if (favourites.includes(newFavourite)) {
      setFavourites(favourites.filter((favs) => favs !== newFavourite));
    }
  };
  useEffect(() => {
    localStorage["favourites"] = JSON.stringify(favourites);
  }, [favourites]);

  return (
    <main className="Main__content">
      <Switch>
        <Route path="/bodyweight">
          <Bodyweight
            bwDataExist={bodyweightChartDataExist}
            bwDataCheck={bodyweightChartDataCheck}
          />
        </Route>
        <Route path="/training/:exerciseId">
          <SingleExercise addFavourite={addFavourite} favourites={favourites} />
        </Route>
        <Route path="/training">
          <Training />
        </Route>
        <Route path="/favourites">
          <Favourites />
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
