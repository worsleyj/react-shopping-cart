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
      <h2>$10.00</h2>
    </div>
  );
};

export default Card;
