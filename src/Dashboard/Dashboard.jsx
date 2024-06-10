import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";

function Dashboard() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-16 p-4 ">
        <div className="group">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Dashboard;
