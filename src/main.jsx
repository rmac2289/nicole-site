import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import "./index.css";
import { About } from "./pages/About";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/contact";
import ErrorPage from "./ErrorPage";
import { Cart } from "./pages/Cart";
import { Product } from "./components/Product";
import items from "./components/products.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faq",
    element: <Faq />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:id",
    element: <Product items={items} />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
