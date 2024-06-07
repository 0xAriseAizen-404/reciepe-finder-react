export const FavouritesPage = () => {
  const fav = false;
  return (
    <div className="flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl mt-4">Favourite Recipes</p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Your saved recipes
        </p>
        {!fav && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="./images/404.svg" alt="404-svg" className="h-3/4" />
          </div>
        )}
        {fav && (
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* <SingleRecipeCard /> */}
          </div>
        )}
      </div>
    </div>
  );
};
