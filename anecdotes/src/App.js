import { useState } from "react";
import "./index.css";
import Header from "./Header";
import Anecdotes from "./Anecdotes";
import Button from "./Button";
import Winner from "./Winner";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setAllVotes] = useState(Array(6).fill(0));

  function voteForAnecdotes() {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    console.log(newVotes);
    setAllVotes(newVotes);
  }

  function nextAnecdotes() {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  return (
    <div>
      <div>
        <Header text="Anecdote of the day" />
        <Anecdotes text={anecdotes[selected]} votes={votes[selected]} />
      </div>
      <div>
        <Button onClick={nextAnecdotes} text={"Next Anecdote"} />
        <Button onClick={voteForAnecdotes} text={"Vote"} />
      </div>
      <Header text={"Anecdotes with most votes"} />
      <Winner anecdotes={anecdotes} allVotes={votes}/>
    </div>
  );
};

export default App;

