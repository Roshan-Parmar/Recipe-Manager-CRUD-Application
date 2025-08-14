import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <div className="flex justify-between items-center bg-gray-800 p-4 mx-auto max-w-6xl">
    <NavLink
        className={({ isActive }) =>
          `px-4 py-2 ${isActive ? "text-red-300 font-bold" : "text-white"}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 ${isActive ? "text-red-300 font-bold" : "text-white"}`
        }
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 ${isActive ? "text-red-300 font-bold" : "text-white"}`
        }
        to="/Recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 ${isActive ? "text-red-300 font-bold" : "text-white"}`
        }
        to="/Create"
      >
        Create
      </NavLink>
    </div>
    </>
  );
};

export default Nav;
