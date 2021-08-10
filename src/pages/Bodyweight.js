import dayjs from "dayjs";
import "./Bodyweight.css";

import BodyweightForm from "../components/BodyweightForm";

export default function Bodyweight() {
  const date = dayjs().format("DD/MM/YYYY");
  return (
    <div>
      <h1>Bodyweight</h1>
      <div className="bodyweight__container">
        <div className="bodyweight__date">
          {date}
          <BodyweightForm />
        </div>
      </div>
      <div className="bodyweight__container"></div>
    </div>
  );
}
