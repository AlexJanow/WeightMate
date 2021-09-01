import dayjs from "dayjs";
import "./Bodyweight.css";
import BodyweightResultsRender from "../components/BodyweightResultsRender";
import BodyweightForm from "../components/BodyweightForm";
import ChartBodyweight from "../components/ChartBodyweight";
import { useState } from "react";
import { getItemsFromLocalStorage } from "../utils/itemStorage";

export default function Bodyweight({ bwDataCheck }) {
  const date = dayjs().format("DD/MM/YYYY");
  const [bodyweightDataArray, setBodyweightDataArray] = useState(() => {
    const saved = getItemsFromLocalStorage("bodyweightDataArray");
    return saved || [];
  });

  return (
    <div className="bodyweight__wrapper">
      <ChartBodyweight
        bodyweightDataArray={bodyweightDataArray}
        bwDataCheck={bwDataCheck}
      />
      <div className="bodyweight__container">
        <div className="bodyweight__date">
          {date}
          <BodyweightForm
            bodyweightDataArray={bodyweightDataArray}
            setBodyweightDataArray={setBodyweightDataArray}
          />
        </div>
      </div>
      <div className="bodyweight__data-container">
        <h3 className="bodyweight__data-container_title">Bodyweight Logbook</h3>
        <ul className="bodyweight__data-container-ul">
          <BodyweightResultsRender />
        </ul>
      </div>
    </div>
  );
}
