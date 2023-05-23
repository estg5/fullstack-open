import React from "react";

export default function PersonForm({
  onSubmitHandler,
  onChangeNameHandler,
  onChangePhoneHandler,
  nameValue,
  phoneValue,
}) {
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="nameInput">Name:</label>
        <input
          placeholder="enter name..."
          onChange={onChangeNameHandler}
          value={nameValue}
          id="nameInput"
        />
      </div>
      <div>
        <label htmlFor="numberInput">Number:</label>
        <input
          placeholder="enter number..."
          onChange={onChangePhoneHandler}
          value={phoneValue}
          id="numberInput"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
