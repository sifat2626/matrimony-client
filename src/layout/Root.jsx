import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Toaster } from "react-hot-toast";

function Root() {
  return (
    <div className="dark:bg-black/80 min-h-screen dark:text-white">
      <Navbar />
      <Outlet />

      <Toaster />
    </div>
  );
}

export default Root;
