import "./App.css";
import { useState } from "react";
import Test from "./components/script";
function App() {
  const [counter, setCounter] = useState(0);
  return (
      <>
          <Test/>
      <div className="Wrap">
    <div className="Counter">
      <label id="count">{counter}</label>
      <button id="minus_Btn" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <button id="reset_Btn" onClick={() => setCounter(0)}>
        reset
      </button>
      <button id="Plus_Btn" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div></div>
    </>
  );
}

export default App;
