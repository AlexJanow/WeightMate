import React from "react";
import "./FirstInputs.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FirstInputs({
  bwDataExist,
  usernameExist,
  exerciseExist,
}) {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100",
    },
    visibleOne: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 1,
      },
    },
    visibleTwo: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 2.5,
      },
    },
    visibleThree: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 4,
      },
    },
  };

  return (
    <div>
      {(!exerciseExist || !bwDataExist) && (
        <div>
          {usernameExist && (
            <div>
              <motion.p
                variants={containerVariants}
                initial="hidden"
                animate="visibleOne"
                className="FirstInputs__p"
              >
                Looks like your first time here!
              </motion.p>
              <motion.p
                variants={containerVariants}
                initial="hidden"
                animate="visibleTwo"
                className="FirstInputs__p"
              >
                Start by logging your first weights:
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visibleThree"
                className="FirstInputs__choice-wrapper"
              >
                {!bwDataExist && (
                  <Link className="Link" to="/bodyweight">
                    <p className="FirstInputs__choice-bodyweight">Bodyweight</p>
                  </Link>
                )}
                {!exerciseExist && (
                  <Link className="Link" to="/training">
                    <p className="FirstInputs__choice-exercises">Exercises</p>
                  </Link>
                )}
              </motion.div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
