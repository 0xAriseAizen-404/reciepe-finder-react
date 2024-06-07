import { Search } from "lucide-react";
import { SingleRecipeCard } from "../components/SingleRecipeCard";

export const HomePage = () => {
  return (
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form action="">
          <label
            htmlFor=""
            className="input shadow flex items-center gap-2 border border-white"
          >
            <Search size={24} />
            <input
              type="text"
              className="text-sm md:text-md grow "
              placeholder="what do you want to cook today...?"
            />
          </label>
        </form>
        <p className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SingleRecipeCard />
        </div>
      </div>
    </div>
  );
};
