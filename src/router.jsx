import { createBrowserRouter } from "react-router";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home/Home/Home";
import Coverage from "./pages/Coverage.jsx/Coverage";
import About from "./pages/About/About";
import Error from "./pages/Eroor/Error";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },

      {
        path: 'about',
        Component: About,
      },

       {
        path: '*',
        Component: Error,
      },

    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
    ]
  }
]);
