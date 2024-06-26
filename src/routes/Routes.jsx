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
import Profile from "../pages/User/Profile";
import About from "../pages/About/About";
import EditEvent from "../pages/Dashboard/EditEvent";
import EventDetails from "../components/Home/EventDetails";

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
      },
      {
        path: "/event/:id",
        element: <EventDetails />,
        loader: ({ params }) => fetch(`https://event-show-server.vercel.app/event/${params.id}`)
      },
      {
        path: "/about",
        element: <About />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute><DashboardHome /></PrivateRoute>,
      },
      {
        path: "manage",
        element: <PrivateRoute><ManageEvents /></PrivateRoute>,
      },
      {
        path: "addEvent",
        element: <PrivateRoute><AddEvent /></PrivateRoute>,
      },
      {
        path: "profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "edit/:id",
        element: <PrivateRoute><EditEvent /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://event-show-server.vercel.app/event/${params.id}`)
      }
    ]
  }
]);

export default router;