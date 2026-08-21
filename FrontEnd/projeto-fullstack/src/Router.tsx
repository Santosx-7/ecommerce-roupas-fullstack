import Login from "./pages/Login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";

export const router = createBrowserRouter([
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
]);

<RouterProvider router={router} />;
