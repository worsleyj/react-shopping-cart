import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="home-header">FakeStore!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="products">Store</Link>
      </nav>
      <div className="home-images">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          height="250px"
        ></img>
        <img
          src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
          height="250px"
        ></img>
        <img
          src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
          height="250px"
        ></img>
      </div>

      <p className="home-desc">
        Welcome to FakeStore, your one-stop destination for discovering a world
        of amazing and unique items! Whether you're shopping for the latest
        gadgets, trendy fashion, or one-of-a-kind accessories, we’ve got it all.
        At FakeStore, we pride ourselves on offering an exciting selection of
        products that cater to every need, style, and personality. Our extensive
        catalog features cool electronics, stylish apparel, cutting-edge home
        décor, quirky gifts, and much more. Why Choose FakeStore? Incredible
        Variety: From high-tech devices to timeless fashion, you’ll find
        everything you need and more. Handpicked Products: Our items are
        carefully curated to ensure they are the latest, trendiest, and most
        useful.
      </p>
    </>
  );
}

export default App;
