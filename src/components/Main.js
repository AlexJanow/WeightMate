import Home from "../pages/Home";
import Bodyweight from "../pages/Bodyweight";
import Training from "../pages/Training";
import Logbook from "../pages/Logbook";
import { Switch, Route } from "react-router";
import "./Main.css";
import SingleExercise from "../pages/SingleExercise";
import { useState } from "react";
import Favourites from "../pages/Favourites";
import { addItemtoLocalStorage } from "../utils/itemStorage";

export default function Main() {
  const [favourites, setFavourites] = useState([]);

  const [bodyweightChartDataExist, setBodyweightChartDataExist] =
    useState(false);
  const bodyweightChartDataCheck = (dataSet) => {
    setBodyweightChartDataExist(dataSet.length !== 0);
  };
  const addFavourite = (newFavourite) => {
    if (!favourites.includes(newFavourite)) {
      favourites.push(newFavourite);
      addItemtoLocalStorage("favourites", favourites);
    } else {
      const indexFav = favourites.findIndex(
        (favs) => favs.id === newFavourite.id
      );

      const withoutFav = favourites;
      withoutFav.splice(indexFav, 1);
      addItemtoLocalStorage("favourites", favourites);
    }
  };

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
