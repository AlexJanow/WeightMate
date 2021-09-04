import "./BodyweightResultsRender.css";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import { useEffect, useState } from "react";
import { ImArrowUpRight2, ImArrowDownRight2 } from "react-icons/im";
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
          {data.id === bwLogbook[bwLogbook.length - 1].id ? (
            bwLogbook[bwLogbook.length - 2].weight < data.weight ? (
              <>
                {" "}
                <ImArrowUpRight2 /> +
                {data.weight - bwLogbook[bwLogbook.length - 2].weight} kg
              </>
            ) : (
              <>
                {" "}
                <ImArrowDownRight2 /> -
                {bwLogbook[bwLogbook.length - 2].weight - data.weight} kg
              </>
            )
          ) : null}
          {/* {bwLogbook} */}
        </li>
      );
    });
  } else return null;
}
