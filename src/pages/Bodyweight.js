import dayjs from "dayjs";
import "./Bodyweight.css";
import BodyweightResultsRender from "../components/BodyweightResultsRender";
import BodyweightForm from "../components/BodyweightForm";
import ChartBodyweight from "../components/ChartBodyweight";

export default function Bodyweight() {
  const date = dayjs().format("DD/MM/YYYY");
  const result = localStorage.getItem(date);
  const results = { ...localStorage };
  console.log(results);
  return (
    <div>
      <h1>Bodyweight</h1>
      <ChartBodyweight />
      <div className="bodyweight__container">
        <div className="bodyweight__date">
          {date}
          <BodyweightForm />
        </div>
      </div>
      <div className="bodyweight__data-container">
        <ul>
          <BodyweightResultsRender />
        </ul>
      </div>
    </div>
  );
}
