import React from "react";

const Anecdotes = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>has {props.votes} votes</p>
    </div>
  );
};

export default Anecdotes;
