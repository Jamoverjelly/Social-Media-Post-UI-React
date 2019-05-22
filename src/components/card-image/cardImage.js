import React from "react";
import jelly1000 from "../../images/jelly-1000.jpg";
import jelly1500 from "../../images/jelly-1500.jpg";
import jelly500 from "../../images/jelly-500.jpg";
import "../card-image/cardImage.css";

const CardImage = () => {
  return (
    <div>
      <img
        style={{ width: "100%", height: "100%" }}
        src={jelly500}
        alt="Pretty cat sitting by a flower vase"
        srcSet={`${jelly500} 500w, ${jelly1000} 1000w, ${jelly1500} 1500w`}
      />
    </div>
  );
};

export default CardImage;
