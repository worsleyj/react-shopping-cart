import Nav from "../Nav";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";
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
      <Card name={"pants"} />
      <Card name={"shirt"} />
      <Card name={"hat"} />
    </>
  );
};

export default Product;
