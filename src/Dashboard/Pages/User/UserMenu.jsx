import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function UserMenu() {
  const { logOut } = useAuth();
  return (
    <>
      <NavLink to={"view-biodata"} end>
        View Biodata
      </NavLink>
      <NavLink to={"edit-bio"} end>
        Edit BioData
      </NavLink>
      <NavLink to={"my-contact-requests"} end>
        My Contact Requests
      </NavLink>
      <NavLink to={"got-married"} end>
        Got Married
      </NavLink>
      <NavLink to={"favourites"} end>
        Favourites
      </NavLink>
      <Link onClick={logOut} end>
        LogOut
      </Link>
    </>
  );
}

export default UserMenu;
