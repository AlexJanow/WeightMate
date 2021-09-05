import { useEffect, useState } from "react";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  const getFavsFromLocalStorage = () => {
    setFavourites(JSON.parse(localStorage["favourites"]));
  };

  useEffect(() => {
    getFavsFromLocalStorage();
  }, []);
  return (
    <ul>
      {favourites &&
        favourites.map((fav) => {
          return <li>{fav}</li>;
        })}
    </ul>
  );
}
