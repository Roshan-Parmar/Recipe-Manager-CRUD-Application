import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, title, name, description, Instructions, category } = recipe;
  
  return (
    <Link 
      to={`/recipeDetails/${id}`} 
      className="border p-4 mb-4 rounded-lg shadow-md block hover:shadow-lg transition"
    >
      <h2 className="text-xl font-bold">Title: {title}</h2>
      <p className="text-gray-600">Chef: {name}</p>
      <p>Recipe Description: {description}</p>
      <p className="mt-2"><strong>Instructions:</strong> {Instructions}</p>
      <p className="mt-2"><strong>Category:</strong> {category}</p>
    </Link>
  );
};

export default RecipeCard;
