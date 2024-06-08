import { useState } from "react";
import AdminMenu from "./Pages/Admin/AdminMenu";
import UserMenu from "./Pages/User/UserMenu";
import { MdMenu } from "react-icons/md";

function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`relative min-h-screen h-full w-64 bg-yellow-800 text-white p-4 duration-300 ${
        !open && "-translate-x-[100%]"
      }`}
    >
      <div className="absolute -right-6">
        <button onClick={() => setOpen(!open)}>
          <MdMenu className="text-2xl " />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <AdminMenu />
        <UserMenu />
      </div>
    </div>
  );
}

export default Sidebar;
