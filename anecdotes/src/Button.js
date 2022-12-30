import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        style={{ fontFamily: "'Roboto Mono', monospace" }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
