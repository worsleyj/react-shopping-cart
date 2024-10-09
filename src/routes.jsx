import App from "./components/App.jsx";
import Product from "./components/products/Product.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "profile/:name", element: <Product /> },
];

export default routes;
