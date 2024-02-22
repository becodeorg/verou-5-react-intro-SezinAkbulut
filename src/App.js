import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";
import CalendarComponent from "./CalendarComponent";
import Box from "@mui/material/Box";

const LSKEY = "MyTodoApp";

function App() {
  const initialTodos = JSON.parse(
    window.localStorage.getItem(LSKEY + ".todos")
  ) || [
    { text: "My first todo", done: false },
    { text: "My second todo", done: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo, fromDate, toDate) => {
    setTodos([...todos, { id: uuidv4(), ...newTodo, fromDate, toDate }]);
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
      <Box
        sx={{
          background:
            "linear-gradient(151deg, rgba(2,0,36,1) 0%, rgba(27,10,49,1) 68%, rgba(147,0,255,0.758140756302521) 100%)",
          borderRadius: "5px",
          padding: "7px",
          alignItems: "center",
          margin: "1rem",
        }}
      >
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
          <Route
            path="/calendar"
            element={<CalendarComponent todos={todos} />}
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
