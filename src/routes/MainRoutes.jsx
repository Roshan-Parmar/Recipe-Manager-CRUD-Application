import { Route, Routes } from "react-router-dom"
import Recipes from "../pages/Recipes"
import About from "../pages/About"
import Home from "../pages/Home"
import Create from "../pages/Create"
import SingleRecipe from "../components/SingleRecipe"

const MainRoutes = () => {
  return (
    <>
     <div className="max-w-6xl mx-auto p-4">
      <Routes>
     <Route path="/" element= {<Home/>}/>
     <Route path="/about" element= {<About/>}/>
     <Route path="/recipes" element= {<Recipes/>}/>
     <Route path="/recipeDetails/:id" element= {<SingleRecipe/>}/>
     <Route path="/create" element= {<Create/>}/>
     </Routes>
     </div>
    </>
  )
}

export default MainRoutes