import React from "react";
import { useState, useEffect } from "react";
import "./WelcomeMessage.css";
import "reactjs-popup/dist/index.css";
import dayjs from "dayjs";
import { createItemInLocalStorage } from "../utils/itemStorage";
import { getItemsFromLocalStorage } from "../utils/itemStorage";

export default function WelcomeMessage() {
  const hoursNow = dayjs().format("HH");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [userKnown, setUserKnown] = useState(false);

  useEffect(() => {
    const user = getItemsFromLocalStorage("userName");
    if (user.length === 0) createItemInLocalStorage("userName", userName);
    setUserKnown(!userKnown);
  }, [userName]);

  useEffect(() => {
    // const savedName = getItemsFromLocalStorage("userName");
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
  }, [userKnown]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const newUserName = form.name.value;
    setUserName(newUserName);
  };

  return (
    <div className="WelcomeMessage__wrapper">
      {userName.length === 0 && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>What is your name?</label>
            <input type="text" name="name" required />
          </div>
          <button type="submit">submit</button>
        </form>
      )}
      <p className="WelcomeMessage__message">
        {userName.length !== 0 && message}
      </p>
    </div>
  );
}
