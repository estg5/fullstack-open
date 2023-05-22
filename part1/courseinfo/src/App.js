const Header = ({ name }) => <h1>{name}</h1>;

const Content = (props) => {
  const parts = [];
  for (let index = 0; index < props.content.length; index++) {
    parts.push(
      <Part
        part={props.content[index].part}
        n={props.content[index].n}
        key={index}
      />
    );
  }
  return <>{parts}</>;
};

const Total = ({ total }) => <p>Number of exercises {total}</p>;

const Part = ({ part, n }) => (
  <p>
    {part} {n}
  </p>
);
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
      <Content
        content={[
          { part: part1, n: exercises1 },
          { part: part2, n: exercises2 },
          { part: part3, n: exercises3 },
        ]}
      />

      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
