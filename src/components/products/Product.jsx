import Nav from "../Nav";
import { Outlet, Link, useParams } from "react-router-dom";
import DefaultProduct from "./DefaultProduct";
import Shirt from "./Shirt";
import Pants from "./Pants";

const Product = () => {
  const { name } = useParams();
  return (
    <>
      <Nav />
      <h1>Product Page!!! Very nice!</h1>
      {name === "pants" ? (
        <Pants />
      ) : name === "shirt" ? (
        <Shirt />
      ) : (
        <DefaultProduct />
      )}
      <Link to="pants">Pants</Link>
      <br></br>
      <Link to="shirt">Shirt</Link>
    </>
  );
};

export default Product;
