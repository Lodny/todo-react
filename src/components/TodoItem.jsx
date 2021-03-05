import React, { useState } from "react";
import store from "../store";

export default function TodoItem() {
  // const [item, setItem] = useState("");

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
    <li>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          // checked={todo.done}
          // onChange={onDone}
          autoFocus={true}
        />
        <label>TodoItem</label>
        <button className="destroy" />
      </div>
    </li>
  );
}
