import React from "react";

const HogDetails = (props) => {
  return (
    <div>
      <p>Specialty: {props.hog.specialty}</p>

      <p>Highest medal achieved: {props.hog["highest medal achieved"]}</p>

      <p>Weight: {props.hog.weight}</p>

      <p>Greased: {props.hog.greased ? "true" : "false"}</p>
    </div>
  );
};

export default HogDetails;
