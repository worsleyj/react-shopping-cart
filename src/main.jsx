import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Product from "./Product.jsx";
import Nav from "./Nav.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "product-example", element: <Product /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
    <RouterProvider router={router} />
  </StrictMode>
);
