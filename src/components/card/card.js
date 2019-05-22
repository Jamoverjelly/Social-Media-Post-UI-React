import React from "react";
import CardAvatar from "../card-avatar/cardAvatar";
import CardPost from "../card-post/cardPost";
import "../card/card.css";

function Card() {
  return (
    <div className="article-container">
      <article>
        <div className="card-container">
          <CardAvatar />
          <CardPost />
        </div>
      </article>
    </div>
  );
}

export default Card;
