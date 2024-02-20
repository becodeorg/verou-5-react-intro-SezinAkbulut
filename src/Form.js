import React, { useRef, useState } from "react";

export default function Form({ onAddTodo, onClearCompleted }) {
  const inputRef = useRef();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  function clickHandler() {
    const inputElement = inputRef.current;
    const newTodo = { text: inputElement.value, done: false };

    onAddTodo(newTodo, fromDate, toDate);

    inputElement.value = "";
    setFromDate("");
    setToDate("");
  }

  function clearCompletedHandler() {
    onClearCompleted();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.5rem" }}>Add to the list</label>
        <input
          ref={inputRef}
          type="text"
          placeholder="Write a new todo"
          style={{ marginBottom: "0.5rem" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.5rem" }}>
          From:
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.5rem" }}>
          To:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>
      <button style={{ margin: "0.5rem 0 0 0.5rem" }} onClick={clickHandler}>
        Add
      </button>
      <button
        style={{ margin: "0.5rem 0 0 0.5rem" }}
        onClick={clearCompletedHandler}
      >
        Clear Completed todo's
      </button>
    </div>
  );
}
