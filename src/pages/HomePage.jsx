import { useState, useEffect } from "react";
import { SingleRecipeCard } from "../components/SingleRecipeCard";
import { getRandomColor } from "../utils/util";
import { Search } from "lucide-react";

const API_ID = import.meta.env.VITE_API_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

export const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipeColors, setRecipeColors] = useState({});

  const fetchRecipes = async (query) => {
    setLoading(true);
    setRecipes([]);
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&type=public`
      );
      const data = await response.json();
      setRecipes(data.hits);
      const colors = data.hits?.map(() => getRandomColor());
      setRecipeColors(
        Object.fromEntries(data.hits.map((_, i) => [i, colors[i]]))
      );
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(searchQuery);
  };

  const addToFavourites = (recipe) => {
    const favouriteRecipes =
      JSON.parse(localStorage.getItem("favouriteRecipes")) || [];
    localStorage.setItem(
      "favouriteRecipes",
      JSON.stringify([...favouriteRecipes, recipe])
    );
  };

  const removeFromFavourites = (recipe) => {
    const favouriteRecipes =
      JSON.parse(localStorage.getItem("favouriteRecipes")) || [];
    localStorage.setItem(
      "favouriteRecipes",
      JSON.stringify(favouriteRecipes.filter((item) => item.uri !== recipe.uri))
    );
  };

  return (
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchSubmit}>
          <label
            htmlFor="search"
            className="input shadow flex items-center gap-2 border border-white"
          >
            <Search size={24} />
            <input
              id="search"
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today...?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </form>
        <p className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {isLoading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          {!isLoading &&
            recipes?.map((recipeData, index) => {
              const { recipe } = recipeData;
              return (
                <SingleRecipeCard
                  key={recipe.uri}
                  recipe={recipe}
                  bg={recipeColors[index]?.bg}
                  badge={recipeColors[index]?.badge}
                  addToFavourites={addToFavourites}
                  removeFromFavourites={removeFromFavourites}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
