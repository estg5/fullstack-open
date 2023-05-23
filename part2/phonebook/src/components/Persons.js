import React from "react";

const Person = ({ person, deleteOnClick }) => {
  return (
    <p>
      {person.name} {person.number}{" "}
      <button onClick={() => deleteOnClick(person.id)}>delete</button>
    </p>
  );
};

export default function Persons({ persons, deleteOnClick }) {
  return (
    <>
      {persons.map((p) => (
        <Person person={p} key={p.id} deleteOnClick={deleteOnClick} />
      ))}
    </>
  );
}
