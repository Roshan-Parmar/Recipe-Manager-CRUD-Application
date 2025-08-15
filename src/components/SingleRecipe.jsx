import { useContext } from "react";
import { RecipeContext } from "../context/Recipecontext";
import { useParams } from "react-router-dom";

const SingleRecipe = () => {
   const {data} = useContext(RecipeContext);
   const { id } = useParams(); // Assuming you're using react-router for routing
   console.log(data, id);
   const recipe = data.find((recipe) => recipe.id === id);
   console.log(recipe);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Recipe Details</h1> 
      <h3 className="text-xl font-semibold mb-2">Title: {recipe.title}</h3>
      <h4 className="text-lg mb-2">Category: {recipe.category}</h4>
      <h4 className="text-lg mb-2">Chef: {recipe.name}</h4>
      <h4 className="text-lg mb-2">Description: {recipe.description}</h4>     
      <img src={recipe.image} alt={recipe.name} className="w-64 h-64 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Ingredients : {recipe.Ingredients}</h3>
    </>
  );
}

export default SingleRecipe