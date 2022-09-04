import "./App.css";
import Button from "./components/Button";
import logoFreeCodeCamp from "./images/logo.png";

function App() {
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
        <div className="row">
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
