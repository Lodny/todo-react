import React from "react";
import NewTodo from "./NewTodo";

export default function TodoList() {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTodo></NewTodo>
    </header>
  );
}
