import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, title, name, description, Ingredients, category } = recipe;
  
  return (
    <Link 
      to={`/recipeDetails/${id}`} 
      className="border p-4 mb-4 rounded-lg shadow-md block hover:shadow-lg transition"
    >
      <h2 className="text-xl font-bold">Title: {title}</h2>
      <img src={recipe.image} alt={title} className="w-1/3 h-48 object-cover mb-2 rounded" />
      <p className="text-gray-600">Chef: {name}</p>
      <p>Recipe Description: {description}</p>
      <p className="mt-2"><strong>Ingredients:</strong> {Ingredients}</p>
      <p className="mt-2"><strong>Category:</strong> {category}</p>
    </Link>
  );
};

export default RecipeCard;
