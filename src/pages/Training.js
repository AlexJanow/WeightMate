import "./Training.css";
export default function Training() {
  return (
    <div className="training__exercise-form">
      {/* <form> */}
      {/* <label htmlFor="exercise">exercise</label> */}
      <input
        className="training__exercise-input"
        type="text"
        name="exercise"
        required
      />
      {/* <label htmlFor="weight">weight</label> */}
      <input
        className="training__weight-input"
        type="number"
        name="weight"
        required
      />
      <button className="training__weight-button">+</button>
      {/* <label htmlFor="repetitions">repetitions</label> */}
      <input
        className="training__repetitions-input"
        type="number"
        name="repetitions"
        required
      />
      <button className="training__repititions-button">+</button>
      {/* </form> */}
    </div>
  );
}
