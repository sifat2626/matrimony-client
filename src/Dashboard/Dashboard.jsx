import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div className="flex gap-16">
        <div className="group">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
