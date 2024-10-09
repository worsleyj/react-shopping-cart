import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Product from "./Product.jsx";
import Pants from "./Pants.jsx";
import Shirt from "./Shirt.jsx";
import "./index.css";
import DefaultProduct from "./DefaultProduct.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "product-example",
    element: <Product />,
    children: [
      { index: true, element: <DefaultProduct /> },
      { path: "shirt", element: <Shirt /> },
      { path: "pants", element: <Pants /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
