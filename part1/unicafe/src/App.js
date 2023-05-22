import { useState } from "react";

const Button = ({ setOnClick, text }) => (
  <button onClick={setOnClick}>{text}</button>
);

const DisplayInfo = ({ text, count }) => (
  <p>
    {text} {count}
  </p>
);

const Heading = ({ heading }) => <h1>{heading}</h1>;

const Statistics = ({ good, neutral, bad, average, getAll }) => {
  return (
    <div>
      <Heading heading="statistics" />
      <DisplayInfo text="good" count={good} />
      <DisplayInfo text="neutral" count={neutral} />
      <DisplayInfo text="bad" count={bad} />
      <DisplayInfo text="all" count={getAll()} />
      <DisplayInfo text="average" count={average / getAll() || 0} />
      <DisplayInfo text="positive" count={(good / getAll()) * 100 || 0} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGoodOnClick = () => {
    const goodToSet = good + 1;
    setAverage(average + 1);
    setGood(goodToSet);
  };

  const handleNeutralOnClick = () => {
    const neutralToSet = neutral + 1;
    setNeutral(neutralToSet);
  };

  const handleBadOnClick = () => {
    const badToSet = bad + 1;
    setAverage(average - 1);
    setBad(badToSet);
  };

  const getAll = () => good + bad + neutral;

  return (
    <div>
      <Heading heading="give feedback" />
      <Button setOnClick={handleGoodOnClick} text="good" />
      <Button setOnClick={handleNeutralOnClick} text="neutral" />
      <Button setOnClick={handleBadOnClick} text="bad" />
      <Statistics
        average={average}
        bad={bad}
        getAll={getAll}
        good={good}
        neutral={neutral}
      />
    </div>
  );
};

export default App;
