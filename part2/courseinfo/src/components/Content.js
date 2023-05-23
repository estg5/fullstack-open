import React from "react";
import Part from "./Part";

export default function Content({ course }) {
  let total = 0;
  return (
    <div>
      {course.map((p) => {
        total += p.exercises;
        return <Part key={p.id} name={p.name} exercises={p.exercises} />;
      })}
      <strong>total of {total} exercises</strong>
    </div>
  );
}
