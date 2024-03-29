import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Form({ onAddTodo }) {
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          inputRef={inputRef}
          type="text"
          id="outlined-basic"
          label="Write a todo"
          variant="outlined"
          style={{
            marginTop: "1.5rem",
            backgroundColor: "white",
            color: "black",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          {" "}
          From:
          <TextField
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            variant="outlined"
            style={{ marginLeft: "0.5rem", backgroundColor: "white" }}
          />
        </label>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          {" "}
          To:
          <TextField
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            variant="outlined"
            style={{ marginLeft: "0.5rem", backgroundColor: "white" }}
          />
        </label>
      </div>
      <Button
        variant="contained"
        color="success"
        fontSize="large"
        style={{ margin: "1.5rem 0 0 1rem" }}
        onClick={clickHandler}
      >
        Add
      </Button>
    </div>
  );
}
