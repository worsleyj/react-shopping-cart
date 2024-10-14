import { Link } from "react-router-dom";

const Card = ({ name }) => {
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
          <input type="number"></input>
          <button>+</button>
          <button>-</button>
        </div>
        <buttoN className="add-to-cart-btn">add to cart</buttoN>
      </div>
    </div>
  );
};

export default Card;
