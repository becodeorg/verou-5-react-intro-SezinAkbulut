import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <Form />

      <Todo />

      {console.log("Hello World")}
    </div>
  );
}

export default App;
