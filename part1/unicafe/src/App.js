import { useState } from "react";

const Button = ({ setOnClick, text }) => (
  <button onClick={setOnClick}>{text}</button>
);

const StatisticsLine = ({ text, value, percentSign }) => (
  <tr>
    <td>{text}</td>
    <td>
      {value}
      {percentSign ? "%" : ""}
    </td>
  </tr>
);

const Heading = ({ heading }) => <h1>{heading}</h1>;

const Statistics = ({ good, neutral, bad, average, getAll }) => {
  if (!good && !neutral && !bad) {
    return (
      <div>
        <Heading heading="statistics" />
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">
            <Heading heading="statistics" />
          </th>
        </tr>
      </thead>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={getAll()} />
        <StatisticsLine
          text="average"
          value={(average / getAll()).toFixed(1) || 0}
        />
        <StatisticsLine
          text="positive"
          value={((good / getAll()) * 100).toFixed(1) || 0}
          percentSign={true}
        />
      </tbody>
    </table>
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
