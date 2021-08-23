import React from "react";

export default function addWeightToLocalStorage(key) {
  const savedData = JSON.parse(localStorage.getItem(key)) || [];
  savedData.push(
    localStorage.setItem("bodyweightDataArray", JSON.stringify(key))
  );
}

export function getItemsFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}
