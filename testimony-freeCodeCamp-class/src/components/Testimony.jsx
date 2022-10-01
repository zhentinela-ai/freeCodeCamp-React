import React from "react";
import "../styles/Testimony.css";

class Testimony extends React.Component {
  render() {
    const alt = `${this.props.name}'s Photo`;
    return (
      <div className="testimony-container">
        <img
          src={require(`../images/testimony-${this.props.image}.png`)}
          alt={alt}
          className="image-testimony"
        />
        <div className="testimony-text-container">
          <p className="testimony-name">
            <strong>{this.props.name}</strong> en {this.props.counrty}
          </p>
          <p className="testimony-charge">
            {this.props.charge} en <strong>{this.props.company}</strong>
          </p>
          <p className="testimony-text">{this.props.testimony}</p>
        </div>
      </div>
    );
  }
}

export default Testimony;
