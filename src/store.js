import { createStore } from "redux";

function reducer(state, action) {
  if (state === undefined) {
    return {
      todos: [],
    };
  }

  if (action.type === "ADD") {
    console.log("action[ADD] : ", action);
    const newTodo = { id: Date.now(), text: action.text, completed: false, deleted: false };
    const newTodos = [...state.todos, newTodo];
    console.log(newTodos);
    return { todos: newTodos };
  }

  return {};
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
