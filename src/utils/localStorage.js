import toast from "react-hot-toast";

// Function to get the wishlist from localStorage
const getWishlist = () => {
  try {
    const storedWishlist = localStorage.getItem("wishes");
    if (storedWishlist) {
      return JSON.parse(storedWishlist);
    }
  } catch (error) {
    console.error("Error parsing favourites from localStorage:", error);
  }
  return [];
};

// Function to check if an item exists in the wishlist
const checkExists = (id) => {
  const idInt = Number(id);
  const storedWishlist = getWishlist();
  return storedWishlist.includes(idInt);
};

// Function to add or remove an item from the wishlist
const setWishlist = (id, type = "") => {
  const idInt = Number(id);
  const storedWishlist = getWishlist();
  const existsIndex = storedWishlist.indexOf(idInt);

  if (existsIndex === -1) {
    storedWishlist.push(idInt);
    toast.success("Added to Favourites!");
  } else {
    storedWishlist.splice(existsIndex, 1);
    if (type !== "order") {
      toast("⚠️ Removed from Favourites!");
    }
  }

  try {
    localStorage.setItem("wishes", JSON.stringify(storedWishlist));
  } catch (error) {
    console.error("Error setting favourites in localStorage:", error);
  }
};

// Function to get the current theme from localStorage
const getLocalTheme = () => {
  try {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
  } catch (error) {
    console.error("Error getting theme from localStorage:", error);
  }
  return "light";
};

// Function to toggle the theme in localStorage
const setLocalTheme = () => {
  const storedTheme = getLocalTheme();
  const newTheme = storedTheme === "light" ? "dark" : "light";
  try {
    localStorage.setItem("theme", newTheme);
  } catch (error) {
    console.error("Error setting theme in localStorage:", error);
  }
};

export { getLocalTheme, setLocalTheme, getWishlist, setWishlist, checkExists };
