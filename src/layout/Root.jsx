import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../shared/Footer";

function Root() {
  return (
    <div className="dark:bg-black/80 min-h-screen dark:text-white">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Root;
