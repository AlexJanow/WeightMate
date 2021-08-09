import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bodyweight">Bodyweight</NavLink>
        <NavLink to="/training">Training</NavLink>
        <NavLink to="/logbook">Logbook</NavLink>
      </nav>
    </footer>
  );
}
