/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";

function AdminRoute({ children }) {
  const { role, loading, error } = useRole();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (role !== "admin") {
    return <Navigate state={location.pathname} to={"/login"} replace />;
  }

  return <div>{children}</div>;
}

export default AdminRoute;
