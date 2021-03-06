import React from "react";
import store from "../store";

export default function TodoItem({ todo }) {
  const handleChange = (e) => {
    console.log("TodoItem() : handleChange() : checked : ", e.target.checked);
    store.dispatch({ type: "TOGGLE", id: todo.id });
  };

  const handleClick = () => {
    console.log("TodoItem() : handleClick() : delete id : ", todo.id);
    store.dispatch({ type: "DELETE", id: todo.id });
  };

  return (
    <li className={`${todo.done ? "completed" : ""}`}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.done}
          onChange={handleChange}
          autoFocus={true}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={handleClick} />
      </div>
    </li>
  );
}
