import "../styles/Button.css";
import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.clicButton ? "clic-button" : "reset-button"}
        onClick={this.props.handleClic}
      >
        {this.props.text}
      </button>
    );
  }
}
export default Button;
