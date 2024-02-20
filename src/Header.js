import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
  fontSize: "44px",
  backgroundColor: "#5F8670",
  marginBottom: "20px",
  padding: "10px",
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>My Todo App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
