import React from "react";
import { Accordion } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

export default function SingleExerciseAccordion({ classes, exerciseData }) {
  return (
    <div className="singleExercise__accordion">
      <Box display="flex" justifyContent="center" alignItems="center">
        {exerciseData?.description?.length !== 0 && (
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
                {/* the regex below gets rid of the hmtl-tags, which the API delivers (for whatever reason) */}
                {exerciseData &&
                  exerciseData.description.replace(/(<([^>]+)>)/gi, "")}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        {exerciseData?.variations?.length !== 0 && (
          <Accordion className={classes.root}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Variations</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.variations}>
              <Typography className={classes.heading}>
                {exerciseData &&
                  exerciseData.variations.map((exercise, index) => {
                    return (
                      <span className="singleExercise__li" key={index}>
                        <Link className="Link" to={`/training/${exercise}`}>
                          {exercise}
                        </Link>
                      </span>
                    );
                  })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </Box>
    </div>
  );
}
