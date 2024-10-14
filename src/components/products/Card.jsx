import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ name, cartQuantity, setCartQuantity }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-card">
      <h1>{name}</h1>
      <Link to={"../product/" + name}>{name}</Link>
      <p>
        {name} ipsum dolor sit, amet consectetur adipisicing elit. Quo, mollitia
        saepe tempora rerum molestias ex excepturi ad nostrum, cupiditate libero
        minus aut consectetur enim reiciendis, quas neque molestiae corrupti
        eveniet.
      </p>
      <div className="product-card-footer">
        <h2>$10.00</h2>
        <div className="quantity-input">
          <input
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          ></input>
          <button
            onClick={() => {
              setQuantity(parseInt(quantity) + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (quantity > 0) {
                setQuantity(parseInt(quantity) - 1);
              }
            }}
          >
            -
          </button>
        </div>
        <button
          onClick={() => {
            if (quantity > 0) {
              setCartQuantity(cartQuantity + parseInt(quantity));
            }
            setQuantity(0);
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
