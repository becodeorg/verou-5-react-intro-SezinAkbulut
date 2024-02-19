import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

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
