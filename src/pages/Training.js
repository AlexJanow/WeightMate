import "./Training.css";
export default function Training() {
  return (
    <div className="training__exercise-form">
      <form>
        <label htmlFor="exercise">exercise</label>
        <input type="text" name="exercise" required />
      </form>
    </div>
  );
}
