import React from "react";
import CardFrontmatter from "../card-frontmatter/cardFrontmatter";
import CardImage from "../card-image/cardImage";
import "../card-link/cardLink.css";

const CardLink = () => {
  return (
    <div className="card-link-container">
      <CardImage />
      <CardFrontmatter />
    </div>
  );
};

export default CardLink;
