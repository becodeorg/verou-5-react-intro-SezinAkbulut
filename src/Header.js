import React from "react";

const headerStyle = {
  fontSize: "44px",
  backgroundColor: "#5F8670",
  textAlign: "center",
  marginBottom: "20px",
  padding: "10px",
};

function Header() {
  return (
    <div style={headerStyle}>
      <h1>My Todo App</h1>
    </div>
  );
}

export default Header;
