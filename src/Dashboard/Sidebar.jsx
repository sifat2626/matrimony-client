import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`relative min-h-screen w-64 bg-red-500 duration-300 ${
        !open && "-translate-x-[100%]"
      }`}
    >
      <div className="absolute -right-10">
        <button onClick={() => setOpen(!open)}>open</button>
      </div>
      <div className="flex flex-col gap-4">
        <NavLink to={"/dashboard"} end>
          Stats
        </NavLink>
        <NavLink to={"edit-bio"} end>
          Edit BioData
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
