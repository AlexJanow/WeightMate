import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SingleExercise.css";
export default function SingleExercise() {
  const [info, setInfo] = useState("");
  const [img, setImg] = useState("");
  const { exerciseId } = useParams();
  useEffect(() => {
    const url = `https://wger.de/api/v2/exerciseinfo/${exerciseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
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
  console.log(info);

  return (
    <div className="singleExercise__wrapper">
      <div className="singleExercise__name">
        <h1>{info.name}</h1>
      </div>
      <div className="singleExercise__img">
        <img src={info?.images ? info?.images[0]?.image : null} />
        <img src={info?.images ? info?.images[1]?.image : null} />
      </div>
      <div className="singleExercise__description">
        {/* {info.id} */}
        {/* the regex below is because of the <p>-tags in the API's description */}
        {info && info.description.replace(/(<([^>]+)>)/gi, "")}
      </div>
      <div className="singleExercise__variations">
        Variations:
        <ol>
          {" "}
          {info &&
            info.variations.map((e, index) => {
              return (
                <li key={index}>
                  <Link className="Link" to={`/training/${e}`}>
                    {e}
                  </Link>
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}

{
  /* <Link className="Link" to={`/training/${exercise.data.id}`}>
{exercise.value}
</Link> */
}
