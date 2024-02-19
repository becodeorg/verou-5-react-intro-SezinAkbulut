import React, { useRef } from "react";

export default function Form({ onAddTodo }) {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    const newTodo = { text: inputElement.value, done: false };

    onAddTodo(newTodo);

    inputElement.value = "";
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}
