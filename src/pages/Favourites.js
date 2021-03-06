import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favourites.css";
export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  const getFavsFromLocalStorage = () => {
    const saved = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(saved);
  };

  useEffect(() => {
    getFavsFromLocalStorage();
  }, []);
  return (
    <ul>
      {favourites &&
        favourites.map((fav) => {
          return (
            <li key={fav.id} className="training__result-li">
              <Link className="Link" to={`/training/${fav.id}`}>
                {fav.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
