import { NavLink } from "react-router-dom";

import { IoHomeSharp } from "react-icons/io5";
import { FaWeight } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdLibraryBooks } from "react-icons/md";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <nav className="NavBar">
        <NavLink
          exact
          to="/"
          className="NavIcon"
          activeClassName="NavIcon--active"
        >
          <IoHomeSharp />
        </NavLink>
        <NavLink
          exact
          to="/bodyweight"
          className="NavIcon"
          activeClassName="NavIcon--active"
        >
          <FaWeight />
        </NavLink>
        <NavLink
          exact
          to="/training"
          className="NavIcon GiWeightLiftingUp"
          activeClassName="NavIcon-GiWeightLiftingUp--active"
        >
          <GiWeightLiftingUp />
        </NavLink>
        <NavLink
          exact
          to="/logbook"
          className="NavIcon"
          activeClassName="NavIcon--active"
        >
          <MdLibraryBooks />
        </NavLink>
      </nav>
    </footer>
  );
}
