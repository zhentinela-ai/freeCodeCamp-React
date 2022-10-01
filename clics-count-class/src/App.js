import React from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import freeCodeCampLogo from "./images/logo.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicsNumber: 0,
    };
    this.handleClic = this.handleClic.bind(this);
    this.resetClic = this.resetClic.bind(this);
  }

  handleClic() {
    this.setState(({ clicsNumber }) => ({ clicsNumber: clicsNumber + 1 }));  
  }

  resetClic() {
    this.setState({ clicsNumber: 0 })
  }

  render() {
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
          <Counter clicsNumber={this.state.clicsNumber} />
          <Button text="Clic" clicButton={true} handleClic={this.handleClic} />
          <Button text="Reset" clicButton={false} handleClic={this.resetClic} />
        </div>
      </div>
    );
  }
}

export default App;
