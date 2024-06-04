import { NavLink } from "react-router-dom";
import useRole from "../../../hooks/useRole";

function AdminMenu() {
  const { role, loading } = useRole();

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while fetching the role
  }

  return (
    role === "admin" && (
      <>
        <NavLink to={"/dashboard"} end>
          Stats
        </NavLink>
        <NavLink to={"contact-requests"} end>
          Manage Contact Requests
        </NavLink>
      </>
    )
  );
}

export default AdminMenu;