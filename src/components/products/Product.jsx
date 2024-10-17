import Nav from "../Nav";
import { useState } from "react";
import Card from "./Card";

const Product = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  let cardArray = [];
  generateCards();
  shuffleArray(cardArray);
  return (
    <>
      <Nav cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
      <h1>Products!! Very nice!</h1>
      <div className="card-grid">{cardArray}</div>
    </>
  );
  function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
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
