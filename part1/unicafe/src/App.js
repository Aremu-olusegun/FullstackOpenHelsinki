import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Statistics from "./Statistics";
import './index.css'

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleGoodClick() {
    let newClicks = {
      ...clicks,
      good: clicks.good + 1,
    };
    setClicks(newClicks);
  }
  function handleNeutralClick() {
    let newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
    };
    setClicks(newClicks);
  }
  function handleBadClick() {
    let newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
    };
    setClicks(newClicks);
  }

  return (
    <div>
      <Header name="Customer feedback"/>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header name="Statistics"/>
      <Statistics clicks={clicks}/>
    </div>
  );
};

export default App;

