import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function SingleExercise() {
  const { exerciseId } = useParams();
  useEffect(() => {
    const url = `https://wger.de/api/v2/exercise/${exerciseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [exerciseId]);

  return (
    <div>
      test
      {exerciseId}
    </div>
  );
}
