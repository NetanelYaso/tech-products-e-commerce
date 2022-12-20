import "./Raiting.css";
import React from "react";
import PropTypes from 'prop-types'

function Raiting({ value, text, color }) {
  return (
    <div className="raiting">
      <span>
        <i style={{ color }}
          className={
            value >= 1
              ? 'fa fa-star' :
              value >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }></i>
      </span>
      <span>
        <i style={{ color }}
          className={
            value >= 2
              ? 'fa-solid fa-star' :
              value >= 1.5
                ? 'fa-solid fa-star-half-stroke'
                : 'fa-regular fa-star'}></i>
      </span>
      <span>
        <i style={{ color }}
          className={
            value >= 3
              ? 'fa-solid fa-star' :
              value >= 2.5
                ? 'fa-solid fa-star-half-stroke'
                : 'fa-regular fa-star'}></i>
      </span>
      <span>
        <i style={{ color }}
          className={
            value >= 4
              ? 'fa-solid fa-star' :
              value >= 3.5
                ? 'fa-solid fa-star-half-stroke'
                : 'fa-regular fa-star'}></i>
      </span>
      <span>
        <i style={{ color }}
          className={
            value >= 5
              ? 'fa-solid fa-star' :
              value >= 4.5
                ? 'fa-solid fa-star-half-stroke'
                : 'fa-regular fa-star'}></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Raiting.defaultProps = {
  color: "#f8e825"
}

Raiting.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string

}

export default Raiting;
