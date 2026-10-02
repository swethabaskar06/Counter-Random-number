 import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  const [randomNumber, setRandomNumber] = useState(null);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <h1>Counter and Random Number Generator</h1>
      <div className="section">
        <h2>Counter App</h2>
        <h3>{count}</h3>
        {count === 0 && (
          <p className="warning">Minimum limit reached</p>
        )}
        <div className="buttons">
          <button onClick={increment}>Increment</button>

          <button onClick={decrement}>Decrement</button>

          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <div className="section">
        <h2>Random Number Generator</h2>
        {randomNumber === null ? (
          <p className="message">No number generated yet</p>
        ) : (
          <h3>{randomNumber}</h3>
        )}

        <button onClick={generateRandomNumber}>
          Generate Random Number
        </button>
      </div>
    </div>
  );
}

export default App;
