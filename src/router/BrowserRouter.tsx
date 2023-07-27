import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/index";
import { Register } from "../pages/index";
import Dashboard from "../layout/DashBoard/Dashboard";
import Settings from "../pages/settings/index";
import ProtectedRoutes from "../Components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
