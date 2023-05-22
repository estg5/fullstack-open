const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => (
  <>
    {parts.map((p, i) => (
      <Part part={p.name} n={p.exercises} key={i} />
    ))}
  </>
);

const Total = ({ total }) => (
  <p>
    Number of exercises {total.reduce((init, p) => (init += p.exercises), 0)}
  </p>
);

const Part = ({ part, n }) => (
  <p>
    {part} {n}
  </p>
);

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </div>
  );
};

export default App;
