import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="product/default">Product</Link>
      </nav>
    </>
  );
};

export default Nav;
