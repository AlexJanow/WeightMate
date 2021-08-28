import ChartBodyweight from "../components/ChartBodyweight";
import ChartExercise from "../components/ChartExercise";
import WelcomeMessage from "../components/WelcomeMessage";
export default function Home() {
  return (
    <div>
      <WelcomeMessage />
      <ChartBodyweight />
      <ChartExercise />
    </div>
  );
}
