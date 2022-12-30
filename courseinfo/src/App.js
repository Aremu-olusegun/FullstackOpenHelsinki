import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
import History from "./History";
import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  function changeLeftValue() {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }
  function changeRightValue() {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
      {left}
      <button onClick={() => changeLeftValue()}>Click left to increase</button>
      <button onClick={() => changeRightValue()}>
        Click right to increase
      </button>
      {right}
      <p>{allClicks.join("")}</p>
      <p>
        <History allClicks={allClicks} />
      </p>
    </div>
  );
};

export default App;

