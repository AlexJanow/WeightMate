import "./BodyweightResultsRender.css";

export default function BodyweightResultsRender() {
  // const items = { ...localStorage };

  const bodyweightData = JSON.parse(
    localStorage.getItem("bodyweightDataArray")
  );
  if (bodyweightData) {
    return bodyweightData.map((data) => {
      return (
        <li className="bodyweight__results-render-li">
          {data.date} - {data.weight} kg
        </li>
      );
    });
  } else return null;

  // Object.entries(items).map(([key, value], index) => {
  //   return (
  //     <li key={index} className="bodyweight__results-render-li">
  //       {key} - {JSON.parse(localStorage.getItem())} kg
  //     </li>
  //   );
  // });
}
