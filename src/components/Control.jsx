import React, { useState } from "react";
// import store from "../store";
// import { NavLink } from "react-router-dom";

export default function Control() {
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
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> items left
      </span>
      <ul className="filters">
        <li>
          {/* <NavLink exact={true} to="/" activeClassName="selected"> */}
          All
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink to="/active" activeClassName="selected"> */}
          Active
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink to="/completed" activeClassName="selected"> */}
          Completed
          {/* </NavLink> */}
        </li>
      </ul>
      {/* {anyDone && (
          <button className="clear-completed" onClick={onClearCompleted}>
            Clear completed
          </button>
        )} */}
    </footer>
  );
}
