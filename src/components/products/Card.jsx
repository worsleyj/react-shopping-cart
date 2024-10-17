import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Card = ({ productNumber, cartQuantity, setCartQuantity }) => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState("Product");

  useEffect(() => {
    async function fetchProducts() {
      let data = await fetch(
        "https://fakestoreapi.com/products/" + productNumber
      );
      let x = await data.json();

      setProduct(x);
    }

    fetchProducts();
  }, []);

  return (
    <div className="product-card">
      <h1>{product.title}</h1>
      <Link to={"../product/" + product.title}>
        <img src={product.image} height="250px"></img>
        {product.title}
      </Link>
      <p>{product.description}</p>
      <div className="product-card-footer">
        <h2>{"$" + product.price}</h2>
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
