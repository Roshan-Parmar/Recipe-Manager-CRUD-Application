import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);
const Recipecontext = (props) => {
    const [data,setData] = useState([
      // {
      //   title : "Pasta Primavera",
      //   name : "Chef John",  
      //   description : "A classic Italian pasta dish with fresh vegetables.",
      //   image : "https://hips.hearstapps.com/thepioneerwoman/wp-content/uploads/2007/08/1022172587_a3014f6a9b.jpg?resize=980:*",
      //   Ingredients : "Pasta, Bell Peppers, Zucchini, Olive Oil, Garlic, Parmesan Cheese",
      //   category : "lunch",
      //   id : "1", 
      // }
    ]);

    useEffect(()=>{
      console.log("RecipeContext Mounted");
      const storedData = JSON.parse(localStorage.getItem("Recipes"));
      // Check if there is any data in localStorage 
      if(storedData){
        setData(storedData);
      } 
    }, []);
  
  return (
    <>
      <RecipeContext.Provider value={{data,setData}}>
        {props.children}
      </RecipeContext.Provider>
    </>
  )
}

export default Recipecontext