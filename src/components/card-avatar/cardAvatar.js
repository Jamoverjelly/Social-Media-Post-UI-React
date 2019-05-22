import React from "react";
import jamie500 from "../../images/JS-Longwood-500x500.jpeg";
import "../card-avatar/cardAvatar.css";

const CardAvatar = () => {
  return (
    <div className="avatar">
      <a href="#" className="avatar-link">
        <div>
          <img src={jamie500} alt="Jamie" />
        </div>
      </a>
    </div>
  );
};

export default CardAvatar;
