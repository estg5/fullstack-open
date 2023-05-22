import { useState } from "react";

const Button = ({ setOnClick, text }) => (
  <button onClick={setOnClick}>{text}</button>
);

const DisplayCount = ({ text, count }) => (
  <p>
    {text} {count}
  </p>
);

const Heading = ({ heading }) => <h1>{heading}</h1>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Heading heading="give feedback" />
      <Button setOnClick={() => setGood(good + 1)} text="good" />
      <Button setOnClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button setOnClick={() => setBad(bad + 1)} text="bad" />
      <Heading heading="statistics" />
      <DisplayCount text="good" count={good} />
      <DisplayCount text="neutral" count={neutral} />
      <DisplayCount text="bad" count={bad} />
    </div>
  );
};

export default App;
