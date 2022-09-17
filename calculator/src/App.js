import "./App.css";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Display from "./components/Display";
import logoFreeCodeCamp from "./images/logo.png";
import { useState } from "react";
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState("");

  const insertInput = (value) => {
    setInput(input + value);
  };

  const calcuteResult = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Por favor ingrese valores para realizar el calculo")
    }
  }

  return (
    <div className="App">
      <div className="container-logo-freecodecamp">
        <img
          className="logo-freecodecamp"
          src={logoFreeCodeCamp}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="calculator-container">
        <Display input={input} />
        <div className="row">
          <Button handleClick={insertInput}>1</Button>
          <Button handleClick={insertInput}>2</Button>
          <Button handleClick={insertInput}>3</Button>
          <Button handleClick={insertInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={insertInput}>4</Button>
          <Button handleClick={insertInput}>5</Button>
          <Button handleClick={insertInput}>6</Button>
          <Button handleClick={insertInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={insertInput}>7</Button>
          <Button handleClick={insertInput}>8</Button>
          <Button handleClick={insertInput}>8</Button>
          <Button handleClick={insertInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calcuteResult}>=</Button>
          <Button handleClick={insertInput}>0</Button>
          <Button handleClick={insertInput}>.</Button>
          <Button handleClick={insertInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")} />
        </div>
      </div>
    </div>
  );
}

export default App;
