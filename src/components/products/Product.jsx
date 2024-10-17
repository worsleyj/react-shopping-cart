import Nav from "../Nav";
import { useState } from "react";
import Card from "./Card";

const Product = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  let cardArray = [];
  generateCards();
  shuffleArray(cardArray);

  return (
    <>
      <Nav
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
        cartPrice={cartPrice}
        setCartPrice={setCartPrice}
      />
      <h1 className="store-header">Very nice products, they are for sale</h1>
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
    let i = 0;
    while (i < 20) {
      i++;
      cardArray.push(
        <Card
          key={i}
          productNumber={i}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
          cartPrice={cartPrice}
          setCartPrice={setCartPrice}
        />
      );
    }
  }
};

export default Product;
