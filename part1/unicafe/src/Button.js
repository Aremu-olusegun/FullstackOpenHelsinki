import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ fontFamily: "'Roboto Mono', monospace" }}
    >
      {text}
    </button>
  );
};

export default Button;
