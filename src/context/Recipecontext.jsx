import { createContext, useState } from "react";

export const RecipeContext = createContext(null);
const Recipecontext = (props) => {
    const [data,setData] = useState([
      {
        title : "Pasta Primavera",
        name : "Chef John",  
        description : "A classic Italian pasta dish with fresh vegetables.",
        image : "https://hips.hearstapps.com/thepioneerwoman/wp-content/uploads/2007/08/1022172587_a3014f6a9b.jpg?resize=980:*",
        Ingredients : "Pasta, Bell Peppers, Zucchini, Olive Oil, Garlic, Parmesan Cheese",
        category : "lunch",
        id : "1", 
      }
    ]);
  return (
    <>
      <RecipeContext.Provider value={{data,setData}}>
        {props.children}
      </RecipeContext.Provider>
    </>
  )
}

export default Recipecontext