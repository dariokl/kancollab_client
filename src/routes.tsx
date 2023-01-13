import { useRoutes, Navigate } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import DashboradLayout from "./layout";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import NewBoard from "./components/forms/newBoard/NewBoard";
import NewTask from "./components/forms/newTask/NewTask";
import Board from "./pages/Board";
import Home from "./pages/Home";

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
        {
          path: "/create-new-task",
          element: <NewTask />,
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