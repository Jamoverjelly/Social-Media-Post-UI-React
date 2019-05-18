import React from "react";
import CardImage from "../card-image/cardImage";
import "../card-link/cardLink.css";

const CardLink = () => {
  return (
    <div className="link-container">
      <div className="link-image-container">
        <CardImage />
      </div>
    </div>
  );
};

export default CardLink;
