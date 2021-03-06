import React, { useState, useEffect } from "react";
import store from "../store";
// import { NavLink } from "react-router-dom";

export default function Control() {
  const [left, setLeft] = useState(0);
  const [view, setView] = useState("All");

  const anyDone = store.getState().todos.length > left;

  useEffect(() => {
    store.subscribe(() => {
      const leftCnt = store.getState().todos.filter((todo) => !todo.done)
        .length;
      console.log("Control() : subscribe() : leftCnt : ", leftCnt);
      setLeft(leftCnt);
      setView(store.getState().view);
    });
  }, []);

  const handleClick = (newView) => () => {
    console.log("Control() : handleClick() : newView : ", newView);
    store.dispatch({ type: "VIEW", view: newView });
  };

  const handleClearCompleted = () => {
    console.log("Control() : handleClearCompleted() : anyDone : ", anyDone);
    store.dispatch({ type: "CLEAR-COMPLETED" });
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{left}</strong> items left
      </span>
      <ul className="filters">
        <li
          className={view === "All" ? "selected" : ""}
          onClick={handleClick("All")}
        >
          All
        </li>
        <li
          className={view === "Active" ? "selected" : ""}
          onClick={handleClick("Active")}
        >
          Active
        </li>
        <li
          className={view === "Completed" ? "selected" : ""}
          onClick={handleClick("Completed")}
        >
          Completed
        </li>
      </ul>
      {anyDone && (
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
