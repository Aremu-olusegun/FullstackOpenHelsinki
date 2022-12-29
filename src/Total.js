import React from "react";

const Total = (props) => {
  let data = props.parts;
  console.log(data.parts);
  let newData = data.parts;
  return (
    <div>
      <p>Total is {newData.map((x) => x.exercises).reduce((a, b) => a * b)}</p>
    </div>
  );
};

export default Total;
