import { NavLink, Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Icon from "@mdi/react";
import { mdiScaleBathroom } from "@mdi/js";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <BottomNavigation
      // value={value}
      // onChange={handleChange}
      // className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/bodyweight"
          label="Bodyweight"
          value="bodyweight"
          icon={<Icon path={mdiScaleBathroom} title="Bodyweight" size={1} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/training"
          label="Training"
          value="training"
          icon={<FitnessCenterIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/logbook"
          label="Logbook"
          value="logbook"
          icon={<LibraryBooksIcon />}
        />
      </BottomNavigation>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bodyweight">Bodyweight</NavLink>
        <NavLink to="/training">Training</NavLink>
        <NavLink to="/logbook">Logbook</NavLink>
      </nav> */}
    </footer>
  );
}
