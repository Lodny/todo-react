import React, { useState } from "react";
import NewTodo from "../components/NewTodo";
import store from "../store";

export default function NewTodoContainer() {
  // const [newValue, setNewValue] = useState("");

  // const handleChange = (e) => {
  //   setNewValue(e.target.value);
  // };

  // const handleAddTodo = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     console.log("handleAddTodo() : ", newValue);
  //     store.dispatch({ type: "ADD", text: newValue });
  //     setNewValue("");
  //   }
  // };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <NewTodo />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          type="checkbox"
          className="toggle-all"
          // checked={allSelected}
          // onChange={onToggleAll}
        />
        <label htmlFor="toggle-all" />
      </section>
    </>
  );
}
