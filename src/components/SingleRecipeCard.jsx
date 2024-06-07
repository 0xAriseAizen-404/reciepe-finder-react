import { Heart, HeartPulse, Soup } from "lucide-react";

export const SingleRecipeCard = () => {
  return (
    <>
      <div className="flex flex-col rounded-md overflow-hidden p-3 relative">
        <a href="#" className="relative h-40">
          <img
            src="./images/1.jpg"
            alt="recipe"
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute rounded-full bottom-2 left-2 flex items-center gap-1 cursor-pointer text-sm bg-[#000] p-1">
            <Soup size={16} />4 servings
          </div>
          <div className="absolute top-2 right-2 bg-[#000] rounded-full cursor-pointer p-1">
            <Heart
              size={20}
              className="hover:fill-red-500 hover:text-red-500"
            />
          </div>
        </a>
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-sm font-semibold tracking-wide">Chicken Curry</p>
          <p className="text-xs text-slate-500">by John Doe</p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex gap-1 bg-secondary items-center p-1 rounded-md">
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              Gluten-free
            </span>
          </div>
          <div className="flex gap-1 bg-accent items-center p-1 rounded-md">
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              Heart-Healthy
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
