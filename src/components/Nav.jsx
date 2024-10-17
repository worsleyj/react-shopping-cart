import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = ({ cartQuantity, setCartQuantity }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="products">Product</Link>
        <div>
          <button
            className="checkout-button"
            onClick={() => {
              if (cartQuantity > 0) {
                alert("You checked out your " + cartQuantity + " items!");
                setCartQuantity(0);
              } else {
                alert("Your cart is empty! Add some items and try again.");
              }
            }}
          >
            Checkout
          </button>
          <div>{cartQuantity}</div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
