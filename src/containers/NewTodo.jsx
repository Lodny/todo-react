import React, { useState } from "react";
import store from "../store";

export default function NewTodo() {
  const [newValue, setNewValue] = useState("");

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("handleAddTodo() : ", newValue);
      store.dispatch({ type: "ADD", text: newValue });
    }
  };

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newValue}
        onChange={handleChange}
        onKeyUp={handleAddTodo}
      />
    </>
  );
}
