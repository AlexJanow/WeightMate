import "./BodyweightResultsRender.css";

export default function BodyweightResultsRender() {
  const items = { ...localStorage };

  return Object.entries(items).map(([key, value], index) => {
    return (
      <li key={index} className="bodyweight__results-render-li">
        {key} - {JSON.parse(value)} kg
      </li>
    );
  });
}
