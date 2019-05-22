import React from "react";
import CardHeader from "../card-header/cardHeader";
import CardLink from "../card-link/cardLink";
import "../card-post/cardPost.css";
import CardUserComment from "../card-user-comment/cardUserComment";

function CardPost() {
  return (
    <div className="card-post-container">
      <CardHeader />
      <CardUserComment />
      <CardLink />
    </div>
  );
}

export default CardPost;
