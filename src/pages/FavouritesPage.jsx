import { useRef, useState } from "react";
import { SingleRecipeCard } from "../components/SingleRecipeCard";
import { getRandomColor } from "../utils/util";

export const FavouritesPage = () => {
  const colorsRef = useRef({});
  const [favouriteRecipes, setFavouriteRecipes] = useState(
    JSON.parse(localStorage.getItem("favouriteRecipes")) || []
  );

  favouriteRecipes.forEach((recipe) => {
    if (!colorsRef.current[recipe.uri]) {
      colorsRef.current[recipe.uri] = getRandomColor();
    }
  });

  const addToFavourites = (recipe) => {
    const favouriteRecipes =
      JSON.parse(localStorage.getItem("favouriteRecipes")) || [];
    localStorage.setItem(
      "favouriteRecipes",
      JSON.stringify([...favouriteRecipes, recipe])
    );
    setFavouriteRecipes(
      JSON.parse(localStorage.getItem("favouriteRecipes")) || []
    );
  };

  const removeFromFavourites = (recipe) => {
    const updatedRecipes = favouriteRecipes.filter(
      (item) => item.uri !== recipe.uri
    );
    localStorage.setItem("favouriteRecipes", JSON.stringify(updatedRecipes));
    setFavouriteRecipes(updatedRecipes);
  };

  return (
    <div className="flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl mt-4">Favourite Recipes</p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Your saved recipes
        </p>
        {favouriteRecipes.length === 0 ? (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="./images/404.svg" alt="404-svg" className="h-3/4" />
          </div>
        ) : (
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {favouriteRecipes.map((recipe) => {
              const color = colorsRef.current[recipe.uri];
              return (
                <SingleRecipeCard
                  key={recipe.uri}
                  recipe={recipe}
                  bg={color.bg}
                  badge={color.badge}
                  addToFavourites={addToFavourites}
                  removeFromFavourites={removeFromFavourites}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
