import { useRoutes, Navigate } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import Board from "./views/board/Board";
import Home from "./views/home/Home";
import DashboradLayout from "./layout";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import NewBoard from "./components/forms/newboard/NewBoard";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      element: (
        <AuthGuard>
          <DashboradLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/board/:id",
          element: <Board />,
        },
        {
          path: "/create-board",
          element: <NewBoard />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
};

export default Router;
