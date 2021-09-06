import React from "react";
import { useState, useEffect } from "react";
import "./WelcomeMessage.css";
import "reactjs-popup/dist/index.css";
import dayjs from "dayjs";
import { createItemInLocalStorage } from "../utils/itemStorage";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import { motion } from "framer-motion";

export default function WelcomeMessage({ setUsernameExist }) {
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
      },
    },
    visibleTwo: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.5,
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
  const hoursNow = dayjs().format("HH");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = getItemsFromLocalStorage("userName");
    if (user.length === 0) createItemInLocalStorage("userName", userName);
  }, [userName]);

  useEffect(() => {
    if (userName.length !== 0) {
      setUsernameExist(true);
    } else {
      setUsernameExist(false);
    }
  }, [userName, setUsernameExist]);

  useEffect(() => {
    const savedName = JSON.parse(localStorage.getItem("userName"));
    setUserName(savedName);
    setMessage(
      `${
        hoursNow >= "05" && hoursNow < "12"
          ? "Good morning"
          : hoursNow >= "12" && hoursNow <= "18"
          ? "Good afternoon"
          : "Good evening"
      }, ${userName} `
    );
  }, [userName, hoursNow]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newUserName = form.name.value;

    setUserName(newUserName);
  };

  return (
    <div className="WelcomeMessage__wrapper">
      {userName.length === 0 && (
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visibleOne"
          onSubmit={handleSubmit}
        >
          <div>
            <label>What is your name?</label>
            <input
              className="WelcomeMessage__input"
              type="text"
              name="name"
              autoComplete="off"
              required
            />
          </div>
          <button className="WelcomeMessage__submit-button" type="submit">
            submit
          </button>
        </motion.form>
      )}
      {userName.length !== 0 && (
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visibleTwo"
          className="WelcomeMessage__message"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
