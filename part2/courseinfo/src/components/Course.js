import React from "react";
import Header from "./Header";
import Content from "./Content";

export default function Course({ course }) {
  return (
    <div>
      <Header name={course.name} />
      <Content course={course.parts} />
    </div>
  );
}
