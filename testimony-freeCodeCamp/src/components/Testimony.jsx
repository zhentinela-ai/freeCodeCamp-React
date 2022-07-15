import React from "react";
import "../styles/Testimony.css";

function Testimony(props) {
  const alt = `${props.image}'s Photo`;
  return (
    <div className="testimony-container">
      <img
        // src={require(`../images/testimony-${props.image}.png`)}
        alt={alt}
        className="image-testimony"
      />
      <div className="testimony-text-container">
        <p className="testimony-name">
          <strong>{props.name}</strong> en {props.counrty}
        </p>
        <p className="testimony-charge">
          {props.charge} en <strong>{props.company}</strong>
        </p>
        <p className="testimony-text">{props.testimony}</p>
      </div>
    </div>
  );
}

export default Testimony;
