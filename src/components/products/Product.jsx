import Nav from "../Nav";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Card";
import Shirt from "./Shirt";
import Pants from "./Pants";
import DefaultProduct from "./DefaultProduct";

const Product = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const { name } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      let data = await fetch("https://fakestoreapi.com/products/");
      let products = await data.json();
      console.log(products);
    }
    fetchProducts();
    return () => {};
  }, []);

  return (
    <>
      <Nav cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
      <h1>Products!! Very nice!</h1>
      {name === "pants" ? (
        <Pants />
      ) : name === "shirt" ? (
        <Shirt />
      ) : (
        <DefaultProduct />
      )}
      <div className="card-grid">
        <Card
          name={"pants"}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
        <Card
          name={"shirt"}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
        <Card
          name={"hat"}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
      </div>
    </>
  );
};

export default Product;
