import React from "react";

const Part = ({ part }) => {
  return (
    <div>
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    </div>
  );
};

export default Part;
