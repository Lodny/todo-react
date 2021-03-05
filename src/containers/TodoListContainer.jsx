import React from "react";
import TodoItem from "../components/TodoItem";

export default function TodoList() {
  return (
    <ul className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      {/* {visibleTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))} */}
    </ul>
  );
}
