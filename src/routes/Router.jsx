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
import EditBio from "../Dashboard/Pages/User/EditBio";
import CheckOut from "../pages/CheckOut";
import ManageContactRequests from "../Dashboard/Pages/Admin/ManageContactRequests";
import AdminRoute from "./AdminRoute";
import MyContactRequests from "../Dashboard/Pages/User/MyContactRequests";
import Stats from "../Dashboard/Pages/Admin/Stats";
import ManageUsers from "../Dashboard/Pages/Admin/ManageUsers";
import ViewBiodata from "../Dashboard/Pages/Admin/ViewBiodata";
import ApprovePremium from "../Dashboard/Pages/Admin/ApprovePremium";
import GotMarried from "../Dashboard/Pages/User/GotMarried";
import SuccessStory from "../Dashboard/Pages/Admin/SuccessStory";

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
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Stats />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "edit-bio",
        element: (
          <PrivateRoute>
            <EditBio />
          </PrivateRoute>
        ),
      },
      {
        path: "my-contact-requests",
        element: (
          <PrivateRoute>
            <MyContactRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "view-biodata",
        element: (
          <PrivateRoute>
            <ViewBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "got-married",
        element: (
          <PrivateRoute>
            <GotMarried />
          </PrivateRoute>
        ),
      },
      {
        path: "contact-requests",
        element: (
          <AdminRoute>
            <ManageContactRequests />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "approve/premium",
        element: (
          <AdminRoute>
            <ApprovePremium />
          </AdminRoute>
        ),
      },
      {
        path: "success-stories",
        element: (
          <AdminRoute>
            <SuccessStory />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
