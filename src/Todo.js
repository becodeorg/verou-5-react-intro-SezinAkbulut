import React from "react";

const todoStyle = {
  fontSize: "24px",
  padding: "10px",
  listStyleType: "none",
  textAlign: "center",
};

const Todo = ({ todos, handleCheckboxChange }) => {
  return (
    <div>
      <h1>Todo's</h1>
      <ul style={todoStyle}>
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleCheckboxChange(index)}
              />{" "}
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
