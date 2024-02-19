import React, { useState } from "react";

const todoStyle = {
  fontSize: "24px",
  padding: "10px",
  listStyleType: "none",
};

const Todo = ({ todos: todosProp }) => {
  const initialTodos = [
    { text: "My first todo", done: false },
    { text: "My second todo", done: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo's</h1>
      <ul style={todoStyle}>
        {todosProp.map((todo, index) => (
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
