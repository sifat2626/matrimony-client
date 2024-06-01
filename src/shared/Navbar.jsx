/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "/title.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import { getLocalTheme, setLocalTheme } from "../utils/localStorage";
function Navbar() {
  const { user, logOut } = useAuth();
  const [dark, setDark] = useState(() => {
    return getLocalTheme() === "light";
  });

  const darkModeHandler = () => {
    console.log(getLocalTheme());
    setDark(!dark);
    setLocalTheme(!dark === "ligth" ? "light" : "dark");
    document.body.classList.toggle("dark");
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#4BCC5A" : "",
    };
  };
  const navList = (
    <>
      <li className="bg-transparent">
        <NavLink
          className={"hover:text-job duration-300 font-medium tracking-widest"}
          to={"/"}
          style={navLinkStyles}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"hover:text-job duration-300 font-medium tracking-widest"}
          to={"/all-jobs"}
          style={navLinkStyles}
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"hover:text-job duration-300 font-medium tracking-widest"}
          to={"/blogs"}
          style={navLinkStyles}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white dark:bg-green-700 px-[5%] py-4 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img src={logo} alt="" className="h-8 w-8" />
          <Link
            to={"/"}
            className="text-xl font-bold text-job dark:text-gray-200"
          >
            Gable
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-4">
          <button onClick={() => darkModeHandler()}>
            {
              dark && <IoSunny /> // render sunny when dark is true
            }
            {
              !dark && <IoMoon /> // render moon when dark is false
            }
          </button>
        </div>
        {!user && (
          <ul className="flex items-center gap-4">
            <li className=" ">
              <NavLink
                className={
                  " flex items-center gap-2  duration-300  border-job border-2 px-4 py-2 hover:bg-job hover:text-white"
                }
                to={"/login"}
                style={navLinkStyles}
              >
                <span>
                  <FaPlusSquare />
                </span>
                <p className="font-medium tracking-widest ">Login</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  "hover:text-job duration-300 font-medium tracking-widest"
                }
                to={"/register"}
                style={navLinkStyles}
              >
                Register
              </NavLink>
            </li>
          </ul>
        )}
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user.displayName} className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-700 text-white font-medium rounded-box w-52"
            >
              <li>
                <Link to={"/profile"}>User Profile</Link>
              </li>
              <li>
                <Link to={"/add-job"}>Add Job</Link>
              </li>
              <li>
                <Link to={"/my-jobs"}>My Jobs</Link>
              </li>
              <li>
                <Link to={"/applied-jobs"}>Applied Jobs</Link>
              </li>
              <li>
                <Link to={"/add-blog"}>Add Blog</Link>
              </li>
              <li>
                <Link onClick={logOut}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
