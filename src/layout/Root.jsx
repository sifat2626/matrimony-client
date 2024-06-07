import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../shared/Footer";
import { useState, useEffect } from "react";
import { getLocalTheme, setLocalTheme } from "../utils/localStorage";

function Root() {
  const [dark, setDark] = useState(() => {
    return getLocalTheme() === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const darkModeHandler = () => {
    const newTheme = dark ? "light" : "dark";
    setDark(!dark);
    setLocalTheme(newTheme);
  };

  return (
    <div className="dark:bg-yellow-950 min-h-screen dark:text-white ">
      <Navbar darkModeHandler={darkModeHandler} dark={dark} />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Root;
