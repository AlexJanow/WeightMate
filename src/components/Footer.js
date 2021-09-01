import { Link } from "react-router-dom";
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
      <BottomNavigation>
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          value="home"
          icon={<HomeIcon fontSize="Large" />}
        />
        <BottomNavigationAction
          component={Link}
          to="/bodyweight"
          label="Bodyweight"
          value="bodyweight"
          icon={<Icon path={mdiScaleBathroom} title="Bodyweight" size="35" />}
        />
        <BottomNavigationAction
          component={Link}
          to="/training"
          label="Training"
          value="training"
          icon={<FitnessCenterIcon fontSize="Large" />}
        />
        <BottomNavigationAction
          component={Link}
          to="/logbook"
          label="Logbook"
          value="logbook"
          icon={<LibraryBooksIcon fontSize="Large" />}
        />
      </BottomNavigation>
    </footer>
  );
}
