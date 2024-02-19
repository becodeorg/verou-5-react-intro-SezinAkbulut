import "./App.css";
import Header from "./Header";
import Page from "./Page";
import Todo from "./Todo";

function App() {
  return (
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  */
    <div className="App">
      <Header />
      <br></br>
      <Page />

      <Todo />

      {console.log("Hello World")}
    </div>
  );
}

export default App;
