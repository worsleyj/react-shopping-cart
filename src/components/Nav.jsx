import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Nav.css";

const Nav = ({ cartQuantity }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="product/default">Product</Link>
        <div>
          <button className="checkout-button">Checkout</button>
          <div>{cartQuantity}</div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
