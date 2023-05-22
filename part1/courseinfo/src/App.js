const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ part, n }) => (
  <p>
    {part} {n}
  </p>
);

const Total = ({ total }) => <p>Number of exercises {total}</p>;

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header name={course} />
      <Content n={exercises1} part={part1} />
      <Content n={exercises2} part={part2} />
      <Content n={exercises3} part={part3} />

      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
