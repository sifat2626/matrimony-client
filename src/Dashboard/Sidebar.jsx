import { useState } from "react";
import AdminMenu from "./Pages/Admin/AdminMenu";
import UserMenu from "./Pages/User/UserMenu";

function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`relative min-h-screen h-full w-64 bg-red-500 duration-300 ${
        !open && "-translate-x-[100%]"
      }`}
    >
      <div className="absolute -right-10">
        <button onClick={() => setOpen(!open)}>open</button>
      </div>
      <div className="flex flex-col gap-4">
        <AdminMenu />
        <UserMenu />
      </div>
    </div>
  );
}

export default Sidebar;
