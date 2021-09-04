import dayjs from "dayjs";
import "./Bodyweight.css";
import BodyweightResultsRender from "../components/BodyweightResultsRender";
import BodyweightForm from "../components/BodyweightForm";
import ChartBodyweight from "../components/ChartBodyweight";
import { useState } from "react";
import { getItemsFromLocalStorage } from "../utils/itemStorage";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

export default function Bodyweight({ bwDataCheck }) {
  const todayValue = {
    day: parseInt(dayjs().format("DD")),
    month: parseInt(dayjs().format("MM")),
    year: parseInt(dayjs().format("YYYY")),
  };
  const [selectedDay, setSelectedDay] = useState(todayValue);

  const [bodyweightDataArray, setBodyweightDataArray] = useState(() => {
    const saved = getItemsFromLocalStorage("bodyweightDataArray");

    const sorted = saved.sort(function (a, b) {
      a = a.date.split("/");
      b = b.date.split("/");
      return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    });
    return sorted || [];
  });
  console.log(selectedDay);
  return (
    <div className="bodyweight__wrapper">
      <ChartBodyweight
        bodyweightDataArray={bodyweightDataArray}
        bwDataCheck={bwDataCheck}
      />
      <div className="bodyweight__container">
        <DatePicker
          value={selectedDay}
          onChange={setSelectedDay}
          inputPlaceholder="Select a day"
          inputClassName="bodyweight__date"
          formatInputText={() =>
            `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
          }
        />

        <BodyweightForm
          bodyweightDataArray={bodyweightDataArray}
          setBodyweightDataArray={setBodyweightDataArray}
          selectedDay={selectedDay}
        />
      </div>
      <div className="bodyweight__data-container">
        <h3 className="bodyweight__data-container_title">Bodyweight Logbook</h3>
        <ul className="bodyweight__data-container-ul">
          <BodyweightResultsRender bodyweightDataArray={bodyweightDataArray} />
        </ul>
      </div>
    </div>
  );
}
