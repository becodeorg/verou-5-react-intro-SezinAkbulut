import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

export default function Todo({
  todos,
  handleCheckboxChange,
  handleEditTodo,
  handleDeleteTodo,
}) {
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
    <div style={{ textAlign: "left" }}>
      <List style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "rgba(169, 169, 169, 0.3)",
              borderRadius: "25px",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={todo.done}
                    onChange={() => handleCheckboxChange(index)}
                  />
                }
                label={
                  editIndex === index ? (
                    <Input
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
                  )
                }
              />
              <IconButton
                onClick={() => handleDoubleClick(index)}
                style={{ marginLeft: "auto", color: "lightblue" }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDeleteTodo(index)}
                style={{ marginLeft: "8px", color: "darkred" }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </Box>
        ))}
      </List>
    </div>
  );
}
