import "./App.css";
import freeCodeCampLogo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="cotainer-logo-freecodecamp">
        <img
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
          className="freecodecamp-logo"
        />
      </div>
    </div>
  );
}

export default App;
