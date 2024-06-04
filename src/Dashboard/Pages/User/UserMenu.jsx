import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <>
      <NavLink to={"edit-bio"} end>
        Edit BioData
      </NavLink>
      <NavLink to={"my-contact-requests"} end>
        My Contact Requests
      </NavLink>
    </>
  );
}

export default UserMenu;
