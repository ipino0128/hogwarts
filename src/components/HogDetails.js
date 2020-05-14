import React from "react";

const HogDetails = (props) => {
  return (
    <div>
      <p>specialty: {props.hog.specialty}</p>
      <p>highest medal achieved: {props.hog["highest medal achieved"]}</p>
      <p>weight: {props.hog.weight}</p>
      <p>greased: {props.hog.greased ? "yes" : "no"}</p>
    </div>
  );
};

export default HogDetails;
