import { useState } from "react";
import Nav from "./Nav";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
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
