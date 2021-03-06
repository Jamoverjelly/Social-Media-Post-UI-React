import React from "react";
import "../card-header/cardHeader.css";

const SVG = ({
  style = {},
  fill = "#000",
  width = "20",
  height = "14",
  className = "",
  viewBox = "0 0 24 24"
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
  >
    <g>
      <path
        fill={fill}
        d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"
      />
    </g>
  </svg>
);

const CardHeader = () => {
  return (
    <div className="header-container">
      <div className="card-author">
        <h4>JS-PICKUP</h4>
        <span> @JSPickup · May 13</span>
      </div>
      <div className="card-menu-contain">
        <SVG fill="#707070" className="down-arrow" />
      </div>
    </div>
  );
};

export default CardHeader;
