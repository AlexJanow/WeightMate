import ChartBodyweight from "../components/ChartBodyweight";
import ChartExercise from "../components/ChartExercise";
import FirstInputs from "../components/FirstInputs";
import WelcomeMessage from "../components/WelcomeMessage";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import { useState, useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
export default function Home({ bwDataCheck, bwDataExist }) {
  const [usernameExist, setUsernameExist] = useState(false);
  const [exerciseExist, setExerciseExist] = useState(false);
  const [bodyweightDataArray, setBodyweightDataArray] = useState(() => {
    const saved = getItemsFromLocalStorage("bodyweightDataArray");
    return saved || [];
  });

  useEffect(() => {
    Object.keys(localStorage).forEach((key) => {
      if (!isNaN(key)) {
        if (JSON.parse(localStorage.getItem(key)).length !== 0)
          setExerciseExist(!exerciseExist);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "100",
    },
    visibleOne: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 1,
      },
    },
    visibleTwo: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 1.5,
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
    <div className="Home__wrapper">
      <WelcomeMessage setUsernameExist={setUsernameExist} />
      <FirstInputs
        bwDataExist={bwDataExist}
        usernameExist={usernameExist}
        exerciseExist={exerciseExist}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visibleOne"
      >
        <ChartBodyweight
          bwDataCheck={bwDataCheck}
          bodyweightDataArray={bodyweightDataArray}
          setBodyweightDataArray={setBodyweightDataArray}
        />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visibleTwo"
      >
        <ChartExercise exerciseExist={exerciseExist} />
      </motion.div>
    </div>
  );
}
