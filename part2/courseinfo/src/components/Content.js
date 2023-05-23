import React from "react";
import Part from "./Part";

export default function Content({ parts }) {
  const total = parts.reduce((init, p) => (init += p.exercises), 0);
  return (
    <div>
      {parts.map((p) => (
        <Part key={p.id} name={p.name} exercises={p.exercises} />
      ))}
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
}
