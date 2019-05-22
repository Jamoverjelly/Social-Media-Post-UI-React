import React from "react";
import "../card-user-comment/cardUserComment.css";

const cardUserComment = () => {
  return (
    <div className="card-author">
      <h4>JS-PICKUP</h4>
      <span> @JSPickup · May 13</span>
      <div className="card-user-comment">
        <p>
          Learning React? Improve by working on small, experimental projects.
        </p>
      </div>
    </div>
  );
};

export default cardUserComment;
