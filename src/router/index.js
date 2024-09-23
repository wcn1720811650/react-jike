import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
        path: "/login",
        element: <Login />,
      },
  ]);
  
 export default router