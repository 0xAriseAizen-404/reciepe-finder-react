import { Heart, HeartPulse, Soup } from "lucide-react";
import { useEffect, useState } from "react";

export const SingleRecipeCard = ({
  recipe,
  bg,
  badge,
  addToFavourites,
  removeFromFavourites,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favouriteRecipes =
      JSON.parse(localStorage.getItem("favouriteRecipes")) || [];
    setIsFavourite(favouriteRecipes.some((item) => item.uri === recipe.uri));
  }, [recipe.uri]);

  const handleFavouriteClick = () => {
    if (isFavourite) {
      removeFromFavourites(recipe);
    } else {
      addToFavourites(recipe);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div
      className={`flex flex-col rounded-md overflow-hidden p-3 relative ${bg}`}
    >
      <div className="absolute top-2 right-2 bg-[#000] rounded-full cursor-pointer p-1 z-10">
        <Heart
          size={20}
          className={`text-red-500 ${isFavourite ? "fill-red-500" : ""}`}
          onClick={handleFavouriteClick}
        />
      </div>
      <a
        href={`https://www.youtube.com/results/?search_query=${recipe.label} recipe`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-40"
      >
        <img
          src={recipe.image}
          alt="recipe"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute rounded-full bottom-2 left-2 flex items-center gap-1 cursor-pointer text-sm bg-[#000] p-1 text-white">
          <Soup size={16} />
          {recipe.yield} servings
        </div>
      </a>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-sm font-semibold tracking-wide">{recipe.label}</p>
        <p className="text-xs text-slate-900">
          {recipe.cuisineType[0].charAt(0).toUpperCase() +
            recipe.cuisineType[0].slice(1)}{" "}
          Kitchen
        </p>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        {recipe.healthLabels?.slice(0, 2)?.map((label) => (
          <div
            key={label}
            className={`flex gap-1 items-center p-1 rounded-md ${badge}`}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
