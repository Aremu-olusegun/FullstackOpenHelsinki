import React from "react";

const Winner = ({ anecdotes, allVotes }) => {
  const highestVotesCount = Math.max(...allVotes);
  const findIndex = allVotes.indexOf(highestVotesCount);
  const winner = anecdotes[findIndex];

  if (highestVotesCount === 0) {
    return <p>No votes yet</p>;
  }
  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVotesCount} votes</p>
    </div>
  );
};

export default Winner;
