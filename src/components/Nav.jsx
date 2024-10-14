import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Nav.css";

const Nav = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="product/default">Product</Link>
        <div>{cartQuantity}</div>
      </nav>
    </>
  );
};

export default Nav;
