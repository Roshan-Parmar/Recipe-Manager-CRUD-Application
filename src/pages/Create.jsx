import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/Recipecontext"; // import context object
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { register, reset, handleSubmit } = useForm();
  const { data, setData } = useContext(RecipeContext); // now works
  const navigate = useNavigate();
  const Submit = (recipe) => {
    recipe.id = nanoid(); // not data.id
    setData([...data, recipe]);
    toast.success("Recipe Added Successfully");
    navigate("/recipes");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(Submit)} className="flex flex-col">
      <input {...register("title")} placeholder="Enter Recipe Title" className="border-b outline-0 p-2 mb-4" />
      <input {...register("name")} placeholder="Chef Name" className="border-b outline-0 p-2 mb-4" />
      <input type="url" {...register("image")} placeholder="Image URL" className="border-b outline-0 p-2 mb-4" />
      <textarea {...register("description")} placeholder="Description" className="border-b outline-0 p-2 mb-4" />
      <input {...register("Instructions")} placeholder="Instructions (comma separated)" className="border-b outline-0 p-2 mb-4" />

      <select className="border-b outline-0 p-2 mb-4" {...register("category")}>
        <option value= "breakFast">breakFast</option>
        <option value= "lunch">Lunch</option>
        <option value= "Supper">Supper</option>
        <option value= "Dinner">Dinner</option>
      </select>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;