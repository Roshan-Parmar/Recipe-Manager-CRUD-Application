import { useContext } from "react";
import { RecipeContext } from "../context/Recipecontext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(RecipeContext); // now works
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === id);

  const { register, reset, handleSubmit } = useForm({
    defaultValues : {
      title : recipe.title,
      name : recipe.name,     
      image : recipe.image,
      description : recipe.description,
      Ingredients : recipe.Ingredients,
      category : recipe.category
    }
  });

  const navigate = useNavigate();
  const Update = (updateData) => {
    const index = data.findIndex((recipe) => recipe.id === id);
    // Check if the recipe already exists
       const copyData = [...data];
       copyData[index] = {...copyData[index],...updateData}
       setData(copyData);
       updateData.id = id; // Ensure the ID remains the same 
       toast.success("Recipe Updated Successfully");
       navigate("/recipes");
       reset();
  };
  
  const OnDelete = () => {
        const updatedData = data.filter((recipe) => recipe.id !== id);    
        setData(updatedData);
        toast.error("Recipe Deleted Successfully");     
        navigate("/recipes");
  }
  // Assuming you're using react-router for routing
  console.log(data, id);
   
  return (
    <>
    <div className="w-1/2">
      <h1 className="text-2xl font-bold mb-4">Recipe Details</h1> 
      <h3 className="text-xl font-semibold mb-2">Title: {recipe.title}</h3>
      <h4 className="text-lg mb-2">Category: {recipe.category}</h4>
      <h4 className="text-lg mb-2">Chef: {recipe.name}</h4>
      <h4 className="text-lg mb-2">Description: {recipe.description}</h4>     
      <img src={recipe.image} alt={recipe.name} className="w-64 h-64 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Ingredients : {recipe.Ingredients}</h3>
    </div>

    <div className="w-1/2">
     <form onSubmit={handleSubmit(Update)} className="flex flex-col">
      <input {...register("title")} placeholder="Enter Recipe Title" className="border-b outline-0 p-2 mb-4" />
      <input {...register("name")} placeholder="Chef Name" className="border-b outline-0 p-2 mb-4" />
      <input type="url" {...register("image")} placeholder="Image URL" className="border-b outline-0 p-2 mb-4" />
      <textarea {...register("description")} placeholder="Description" className="border-b outline-0 p-2 mb-4" />
      <input {...register("Ingredients")} placeholder="Ingredients (comma separated)" className="border-b outline-0 p-2 mb-4" />

      <select className="border-b outline-0 p-2 mb-4" {...register("category")}>
        <option value= "breakFast">breakFast</option>
        <option value= "lunch">Lunch</option>
        <option value= "Supper">Supper</option>
        <option value= "Dinner">Dinner</option>
      </select>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
        Update Recipe
      </button>
      <button className="bg-red-400 hover:bg-red-300 text-white font-semibold px-4 py-2 rounded-lg shadow-md mt-4" onClick={handleSubmit(OnDelete)}>
        Delete Recipe
      </button>
    </form>
     </div>
    </>
  );
}

export default SingleRecipe