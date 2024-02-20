import React, { useState } from "react";

export default function Todo({ todos, handleCheckboxChange, handleEditTodo }) {
  const [editIndex, setEditIndex] = useState(null);

  const handleDoubleClick = (index) => {
    setEditIndex(index);
  };

  const handleEditInputChange = (event, index) => {
    handleEditTodo(index, event.target.value);
  };

  const handleEditInputBlur = () => {
    setEditIndex(null);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleCheckboxChange(index)}
          />
          {editIndex === index ? (
            <input
              type="text"
              value={todo.text}
              onChange={(e) => handleEditInputChange(e, index)}
              onBlur={handleEditInputBlur}
              autoFocus
            />
          ) : (
            <span onDoubleClick={() => handleDoubleClick(index)}>
              {todo.text}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
