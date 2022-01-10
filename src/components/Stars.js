import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";

function range(limit) {
  const arr = [];
  for (let i = 0; i < limit; i++) {
    arr.push(i);
  }
  return arr;
}

const Stars = ({ count }) => {
  return (
    typeof count === "number" &&
    count >= 1 &&
    count <= 5 && (
      <ul className="card-body-stars u-clearfix">
        {range(count).map((i) => (
          <Star key={i} />
        ))}
      </ul>
    )
  );
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;
