const COLORS = {
  green: {
    bg: "bg-primary",
    badge: "bg-secondary",
  },
  orange: {
    bg: "bg-secondary",
    badge: "bg-accent",
  },
  red: {
    bg: "bg-accent",
    badge: "bg-primary",
  },
};

export const getRandomColor = () => {
  const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
  const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
  const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
  return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};
