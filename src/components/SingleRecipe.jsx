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
      <h2>{recipe.id}</h2>
      <h2>{recipe.name}</h2>
    </>
  );
}

export default SingleRecipe