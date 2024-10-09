import Nav from "../Nav";
import { Outlet, Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <Nav />
      <h1>Product Page!!! Very nice!</h1>
      <Outlet />
      <Link to="pants">Pants</Link>
      <br></br>
      <Link to="shirt">Shirt</Link>
    </>
  );
};

export default Product;
