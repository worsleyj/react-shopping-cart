import Nav from "../Nav";
import { useState } from "react";
import Card from "./Card";

const Product = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  let cardArray = [];
  generateCards();
  return (
    <>
      <Nav cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
      <h1>Products!! Very nice!</h1>
      <div className="card-grid">{cardArray}</div>
    </>
  );
  function generateCards() {
    cardArray = [];
    let i = 0;
    while (i < 20) {
      i++;
      cardArray.push(
        <Card
          key={i}
          productNumber={i}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
        />
      );
    }
  }
};

export default Product;
