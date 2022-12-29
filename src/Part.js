import React from "react";

const Part = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <h3>
        {part1} {exercises1}
      </h3>
      <h3>
        {part2} {exercises2}
      </h3>
      <h3>
        {part3} {exercises3}
      </h3>
    </div>
  );
};

export default Part;
