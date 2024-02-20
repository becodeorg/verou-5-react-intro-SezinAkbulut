import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";

const LSKEY = "MyTodoApp";

function App() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), todo: newTodo, completed: false }]);
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  });

  return (
    <div>
      <Header />
      <br />
      <Form onAddTodo={addTodo} />
      <Todo todos={todos} />
      {console.log("Testing")}
    </div>
  );
}

export default App;
