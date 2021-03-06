import React, { useState, useEffect } from "react";
import store from "../store";
import TodoItem from "../components/TodoItem";

export default function TodoListContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    store.subscribe(() => {
      const view = store.getState().view;
      console.log(
        "TodoListContainer() : subscribe() : todos :",
        store.getState().todos,
        view
      );

      if (view === "All") setTodos(store.getState().todos);
      else if (view === "Active")
        setTodos(store.getState().todos.filter((todo) => !todo.done));
      else setTodos(store.getState().todos.filter((todo) => todo.done));
    });
  }, []);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
