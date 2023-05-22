import { useState } from "react";

const Button = ({ text, onClickHandler = undefined }) => (
  <button onClick={onClickHandler}>{text}</button>
);

const DisplayText = ({ text }) => <p>{text}</p>;

const Heading = ({ heading }) => <h1>{heading}</h1>;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [anecdoteVotes, setAnecdoteVotes] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const selectAnecdoteOnClick = () => {
    const randomN = getRandomInt(anecdotes.length);
    setSelected(randomN);
  };
  const voteForAnecdoteOnClick = () => {
    const newAnecdoteVotes = anecdoteVotes.map((e, i) =>
      i === selected ? e + 1 : e
    );
    setAnecdoteVotes(newAnecdoteVotes);
  };

  const getMaxVotes = () => {
    let maxEle = anecdoteVotes[0];
    let idx = 0;
    for (let i = 0; i < anecdoteVotes.length; i++) {
      if (maxEle < anecdoteVotes[i]) {
        maxEle = anecdoteVotes[i];
        idx = i;
      }
    }
    return idx;
  };

  return (
    <div>
      <Heading heading="Anecdote of the day" />
      <DisplayText text={anecdotes[selected]} />
      <DisplayText text={`has ${anecdoteVotes[selected]} votes`} />
      <Button text="vote" onClickHandler={voteForAnecdoteOnClick} />
      <Button text="next anecdote" onClickHandler={selectAnecdoteOnClick} />
      <Heading heading="Anecdote with most votes" />
      <DisplayText text={anecdotes[getMaxVotes()]} />
      <DisplayText text={`has ${anecdoteVotes[getMaxVotes()]} votes`} />
    </div>
  );
};

export default App;
