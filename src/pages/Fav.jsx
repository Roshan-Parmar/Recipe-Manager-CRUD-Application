import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Fav = () => {
  const { id } = useParams();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFav = JSON.parse(localStorage.getItem("Fav")) || [];
    setFavorites(storedFav);
  }, [id]);

  const favData = favorites.map((fav, index) => {
    return <li
      className="border p-4 mb-4 rounded-lg shadow-md block hover:shadow-lg transition"
      key = {index}
    >
      <h2 className="text-xl font-bold">Title: {fav?.title}</h2>
      <img src={fav?.image} alt={fav?.title} className="w-1/3 h-48 object-cover mb-2 rounded" />
      <p className="text-gray-600">Chef: {fav?.name}</p>
      <p>Recipe Description: {fav?.description}</p>
      <p className="mt-2"><strong>Ingredients:</strong> {fav?.Ingredients}</p>
      <p className="mt-2"><strong>Category:</strong> {fav?.category}</p>
    </li>
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">     
      <h1 className="mt-35">{favData}</h1>
    </div>
  );
}

export default Fav;