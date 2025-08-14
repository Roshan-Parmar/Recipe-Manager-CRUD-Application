import { useContext } from "react"
import {RecipeContext} from "../context/Recipecontext"
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data} = useContext(RecipeContext); // now works
  
  const RenderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ));

  return (
    <>
      {RenderRecipes}
    </>
  )
}

export default Recipes