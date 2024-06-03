import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllEvents from "../pages/AllEvents/AllEvents";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import PrivateRoute from "../routes/PrivateRoute";
import ManageEvents from "../pages/Dashboard/ManageEvents";
import AddEvent from "../pages/Dashboard/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/events",
        element: <AllEvents />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: "/dashboard/manage",
        element: <ManageEvents />,
      },
      {
        path: "/dashboard/addEvent",
        element: <AddEvent />
      }
    ]
  }
]);

export default router;