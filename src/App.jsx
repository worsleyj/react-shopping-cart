import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <h1>Store</h1>
        <h1>Cart</h1>
      </nav>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        impedit pariatur et unde error expedita voluptatem, at amet consequuntur
        temporibus quaerat. Nisi harum obcaecati nam amet accusantium aliquid!
        Obcaecati, eveniet?
      </p>
    </>
  );
}

export default App;
