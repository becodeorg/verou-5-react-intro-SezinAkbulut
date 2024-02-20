import React, { useRef } from "react";

export default function Form({ onAddTodo, onClearCompleted }) {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    const newTodo = { text: inputElement.value, done: false };

    onAddTodo(newTodo);

    inputElement.value = "";
  }

  function clearCompletedHandler() {
    onClearCompleted();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
      <button onClick={clearCompletedHandler}>Clear Completed</button>
    </div>
  );
}
