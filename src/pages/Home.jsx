import { useEffect } from "react";
import axios from "../utils/axios";
const Home = () => {
  const getData = async () =>{
    console.log("Fetching Data...");
    try{
    const response = await axios.get("/products");
    const data = response.data;
    console.log(data);  
    }
    catch(error){
      console.error("Error fetching data:", error);
    }
  }

  // useEffect(() =>{
  //   getData();
  // },[]);
  
  useEffect(() =>{
    console.log("Component Mounted.....");
    getData();
    return () =>{
      console.log("component Unmounted.....");
    }
  },[]);

  return (
    <>
      <h1>Home</h1>
      <button onClick={getData} className="bg-blue-500 text-white p-2 rounded">Fetch Recipes</button>
    </>
  )
}

export default Home