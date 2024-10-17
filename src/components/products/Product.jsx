import Nav from "../Nav";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Card";
import Shirt from "./Shirt";
import Pants from "./Pants";
import DefaultProduct from "./DefaultProduct";

const Product = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  let cardArray = [];
  generateCards();
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
        {cardArray}
        {/* <Card
          product={product}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
        <Card
          product={product}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
        <Card
          product={product}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        /> */}
      </div>
    </>
  );
  function generateCards() {
    cardArray = [];
    let i = 0;
    while (i < 2) {
      i++;
      console.log(i);
      console.log("lenth" + products);

      cardArray.push(
        <Card
          key={i}
          productNumber={i}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
      );
      console.log(cardArray);
    }
  }
};

export default Product;
