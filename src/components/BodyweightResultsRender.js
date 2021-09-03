import "./BodyweightResultsRender.css";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import { useEffect, useState } from "react";

export default function BodyweightResultsRender({ bodyweightDataArray }) {
  const [bwLogbook, setBwLogbook] = useState([]);
  useEffect(() => {
    setBwLogbook(getItemsFromLocalStorage("bodyweightDataArray"));
  }, [bodyweightDataArray]);

  if (bwLogbook) {
    return bwLogbook.slice(Math.max(bwLogbook.length - 10, 0)).map((data) => {
      return (
        <li key={data.id} className="bodyweight__results-render-li">
          {data.date} - {data.weight} kg
        </li>
      );
    });
  } else return null;
}
