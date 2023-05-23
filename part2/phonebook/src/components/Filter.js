import React from "react";

export default function Filter({ filter, onChangeHandler }) {
  return (
    <div>
      <label htmlFor="filter">filter</label>
      <input value={filter} onChange={onChangeHandler} id="filter" />
    </div>
  );
}
