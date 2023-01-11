import React from "react";

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <h3>
        total of {props.parts.map((x) => x.exercises).reduce((a, b) => a + b)}{" "}
        exercises
      </h3>
    </div>
  );
};

export default Total;
