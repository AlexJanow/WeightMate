import { Switch, Route } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="Header__Logo-wrapper">
        <h2 className="Header__Logo Weight">Weight</h2>
        <h2 className="Header__Logo Mate">Mate</h2>
      </div>
      <Switch>
        <Route path="/bodyweight">
          <h1>Bodyweight</h1>
        </Route>
        <Route path="/training">
          <h1>Training</h1>
        </Route>
        <Route path="/favourites">
          <h1>Favourites</h1>
        </Route>
        <Route path="/logbook">
          <h1>Logbook</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </header>
  );
}
