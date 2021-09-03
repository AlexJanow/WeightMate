import { Switch, Route } from "react-router";
import "./Header.css";
import { ReactComponent as Logo } from "../img/Logo.svg";
export default function Header() {
  return (
    <header>
      <Logo className="Header__Logo" />
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
