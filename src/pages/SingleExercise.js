import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function SingleExercise() {
  const [info, setInfo] = useState("");
  const [img, setImg] = useState("");
  const { exerciseId } = useParams();
  useEffect(() => {
    const url = `https://wger.de/api/v2/exercise/${exerciseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      });
  }, [exerciseId]);

  //   useEffect(() => {
  //     const imgUrl = `https://wger.de/api/v2/exerciseimage/${info.id}/thumbnails/?format=json`;
  //     fetch(imgUrl)
  //       .then((res) => res.json())
  //       .then((data) => setImg(data.thumbnail.url));
  //   }, [info]);

  //   const descr = info.description;
  //   const descrResult = info.replace(/(<([^>]+)>)/gi, "");
  return (
    <div>
      {info.name}
      {info.id}
      {info && info.description.replace(/(<([^>]+)>)/gi, "")}
      {/* <img src={`https://wger.de${img}`} /> */}
    </div>
  );
}
