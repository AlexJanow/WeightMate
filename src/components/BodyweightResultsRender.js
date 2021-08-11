import "./BodyweightResultsRender.css";

export default function BodyweightResultsRender() {
  const items = { ...localStorage };
  console.log(items);
  return Object.entries(items).map(([key, value]) => {
    return (
      <li className="bodyweight__results-render-li">
        {key} - {JSON.parse(value)} kg
      </li>
    );
  });
}
