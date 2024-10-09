import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.jsx";
import Product from "./components/products/Product.jsx";
import Pants from "./components/products/Pants.jsx";
import Shirt from "./components/products/Shirt.jsx";
import "./styles/index.css";
import DefaultProduct from "./components/products/DefaultProduct.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  {
    path: "product-example/:name",
    element: <Product />,
    // children: [
    //   { index: true, element: <DefaultProduct /> },
    //   { path: "shirt", element: <Shirt /> },
    //   { path: "pants", element: <Pants /> },
    // ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
