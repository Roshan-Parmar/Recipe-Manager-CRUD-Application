import { createContext, useState } from "react";

export const RecipeContext = createContext(null);
const Recipecontext = (props) => {
    const [data,setData] = useState([]);
  return (
    <>
      <RecipeContext.Provider value={{data,setData}}>
        {props.children}
      </RecipeContext.Provider>
    </>
  )
}

export default Recipecontext
