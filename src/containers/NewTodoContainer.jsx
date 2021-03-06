import React, { useState, useEffect } from "react";
import NewTodo from "../components/NewTodo";
import store from "../store";

export default function NewTodoContainer() {
  const [allChecked, setAllChecked] = useState(true);

  useEffect(() => {
    store.subscribe(() => {
      console.log(
        "NewTodoContainer() : subscribe() : store.getState().allChecked : ",
        store.getState().allChecked
      );

      setAllChecked(store.getState().allChecked);
    });
  }, []);

  const handleChange = (e) => {
    console.log(
      "NewTodoContainer() : handleChange() : checked : ",
      e.target.checked
    );

    // e.preventDefault();
    store.dispatch({ type: "TOGGLE-ALL" });
  };

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
          checked={allChecked}
          onChange={handleChange}
        />
        <label htmlFor="toggle-all" />
      </section>
    </>
  );
}
