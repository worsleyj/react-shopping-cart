import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="product-example">Product</Link>
      </nav>
    </>
  );
};

export default Nav;
