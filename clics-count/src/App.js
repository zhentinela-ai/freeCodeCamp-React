import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import freeCodeCampLogo from "./images/logo.png";

function App() {

  const handleClic = () => {
    setClicsNumber(clicsNumber + 1);
  }

  const resetClic = () => {
    setClicsNumber(0);
  }

  var [clicsNumber, setClicsNumber] = useState(0);
  
  return (
    <div className="App">
      <div className="cotainer-logo-freecodecamp">
        <img
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
          className="freecodecamp-logo"
        />
      </div>
      <div className="main-container">
        <Counter
        clicsNumber={clicsNumber} />
        <Button 
          text="Clic"
          clicButton={true}
          handleClic={handleClic}
        />
        <Button 
          text="Reset"
          clicButton={false}
          handleClic={resetClic}
        />
      </div>
    </div>
  );
}

export default App;
