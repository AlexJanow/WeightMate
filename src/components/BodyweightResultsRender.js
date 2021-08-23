import "./BodyweightResultsRender.css";

import { getItemsFromLocalStorage } from "../utils/itemStorage";

export default function BodyweightResultsRender() {
  const bodyweightData = getItemsFromLocalStorage("bodyweightDataArray");

  if (bodyweightData) {
    return bodyweightData
      .slice(Math.max(bodyweightData.length - 10, 0))
      .map((data) => {
        return (
          <li key={data.id} className="bodyweight__results-render-li">
            {data.date} - {data.weight} kg
          </li>
        );
      });
  } else return null;
}
