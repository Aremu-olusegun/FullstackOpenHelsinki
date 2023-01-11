import React from "react";

const Part = ({ part }) => {
  return (
    <div>
      <div>
        {part.parts.map((x) => {
          return (
            <div key={x.id}>
              <p>
                {x.name} {x.exercises}
              </p>
            </div>
          );
        })}
        <p>{part.exercises}</p>
      </div>
    </div>
  );
};

export default Part;
