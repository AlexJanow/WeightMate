import { Switch, Route } from "react-router";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <Switch>
        <Route path="/bodyweight">
          <h1>Bodyweight</h1>
        </Route>
        <Route path="/training">
          <h1>Training</h1>
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
