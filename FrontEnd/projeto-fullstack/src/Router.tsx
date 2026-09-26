import Login from "./pages/Login.tsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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

<RouterProvider router={router} />;
