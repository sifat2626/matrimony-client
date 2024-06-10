import { NavLink } from "react-router-dom";

function UserMenu() {
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
    </>
  );
}

export default UserMenu;
