import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Error/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BioDatas from "../pages/BioDatas";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import Stats from "../Dashboard/Pages/Stats";
import EditBio from "../Dashboard/Pages/User/EditBio";
import CheckOut from "../pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/bio-datas",
        element: <BioDatas />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:biodataId",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Stats />,
      },
      {
        path: "edit-bio",
        element: <EditBio />,
      },
    ],
  },
]);

export default router;
