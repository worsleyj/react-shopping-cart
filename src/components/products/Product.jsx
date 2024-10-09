import Nav from "../Nav";
import { Link, useParams } from "react-router-dom";
import Shirt from "./Shirt";
import Pants from "./Pants";
import DefaultProduct from "./DefaultProduct";

const Product = () => {
  const { name } = useParams();
  return (
    <>
      <Nav />
      <h1>Products!! Very nice!</h1>
      {name === "pants" ? (
        <Pants />
      ) : name === "shirt" ? (
        <Shirt />
      ) : (
        <DefaultProduct />
      )}
      <Link to="../product/pants">Pants</Link>
      <br></br>
      <Link to="../product/shirt">Shirt</Link>
    </>
  );
};

export default Product;
