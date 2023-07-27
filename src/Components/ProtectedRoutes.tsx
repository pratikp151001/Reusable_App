import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = localStorage.getItem("activeUser");

  return auth ? <Outlet /> : <Navigate to={"login"} />;
};

export default ProtectedRoutes;
