import React from "react";
import CardAvatar from "../card-avatar/cardAvatar";
import CardHeader from "../card-header/cardHeader";
import CardLink from "../card-link/cardLink";
import "../card/card.css";

function Card() {
  return (
    <div className="card-container">
      <CardAvatar />
      <main>
        <CardHeader />
        <div className="card-link-container">
          <CardLink />
        </div>
      </main>
    </div>
  );
}

export default Card;
