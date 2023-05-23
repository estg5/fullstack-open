import React from "react";

const Person = ({ person }) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  );
};

export default function Persons({ persons }) {
  return (
    <>
      {persons.map((p) => (
        <Person person={p} key={p.id} />
      ))}
    </>
  );
}
