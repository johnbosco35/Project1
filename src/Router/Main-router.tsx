/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeScreen from "../Pages/HomeScreen";
import Layout from "../Block/Layout";

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
