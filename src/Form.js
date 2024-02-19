import React, { useRef } from "react";

export default function Form() {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;

    console.log(inputElement.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}
