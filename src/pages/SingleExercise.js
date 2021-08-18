import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Accordion } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import "./SingleExercise.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "1%",
  },
  heading: {
    margin: "auto",
  },
}));
export default function SingleExercise() {
  const classes = useStyles();
  const [exerciseData, setExerciseData] = useState("");

  const { exerciseId } = useParams();

  useEffect(() => {
    const url = `https://wger.de/api/v2/exerciseinfo/${exerciseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setExerciseData(data);
      });
  }, [exerciseId]);

  return (
    <div className="singleExercise__wrapper">
      <div className="singleExercise__name">
        <h2>{exerciseData.name}</h2>
      </div>
      <div className="singleExercise__img">
        <img
          src={exerciseData?.images ? exerciseData?.images[0]?.image : null}
        />
        <img
          src={exerciseData?.images ? exerciseData?.images[1]?.image : null}
        />
      </div>
      <div className="singleExercise__accordion">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Accordion className={classes.root}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {/* <div className="singleExercise__description"> */}
                {exerciseData &&
                  exerciseData.description.replace(/(<([^>]+)>)/gi, "")}
                {/* </div> */}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Accordion className={classes.root}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Variations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.heading}>
                <div className="singleExercise__variations">
                  {exerciseData &&
                    exerciseData.variations.map((exercise, index) => {
                      return (
                        <li className="singleExercise__li" key={index}>
                          <Link className="Link" to={`/training/${exercise}`}>
                            {exercise}
                          </Link>
                        </li>
                      );
                    })}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <button className="singleExercise__button-train">train exercise</button>
      </div>
    </div>
  );
}
