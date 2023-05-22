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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header name={course} />
      <Content
        content={[
          { part: part1.name, n: part1.exercises },
          { part: part2.name, n: part2.exercises },
          { part: part3.name, n: part3.exercises },
        ]}
      />

      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
