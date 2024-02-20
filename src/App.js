import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";
import Calendar from "./Calendar";

const LSKEY = "MyTodoApp";

function App() {
  const initialTodos = JSON.parse(
    window.localStorage.getItem(LSKEY + ".todos")
  ) || [
    { text: "My first todo", done: false },
    { text: "My second todo", done: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), ...newTodo }]);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  };

  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };
  const handleEditTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("Current todos:", todos);
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Home page */}
              <br />
              <Form onAddTodo={addTodo} onClearCompleted={clearCompleted} />
              <Todo
                todos={todos}
                handleCheckboxChange={(index) => handleCheckboxChange(index)}
                handleEditTodo={handleEditTodo}
              />
              {console.log("Testing")}
            </>
          }
        />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
