import { createStore } from "redux";

function filteredTodos(todos, view) {
  console.log("filteredTodos() : ", todos, view);

  switch (view) {
    case "Active":
      return todos.filter((todo) => !todo.done);

    case "Completed":
      return todos.filter((todo) => todo.done);

    case "All":
    default:
      return todos;
  }
}

function isAllChecked(newTodos, view) {
  if (newTodos.length === 0) return true;
  if (view === "Completed") return true;

  const filtered = filteredTodos(newTodos, view);
  const doneLength = filtered.filter((todo) => todo.done).length;

  console.log("isAllChecked() : ", filtered.length, doneLength);
  return filtered.length === doneLength;
}

function reducer(state, action) {
  if (state === undefined) {
    return {
      todos: [],
      view: "All",
      allChecked: true
    };
  }

  console.log("reducer() : action : ", action);
  console.log("reducer() : view : ", state.view);

  let newTodo = null;
  let newTodos = null;
  switch (action.type) {
    case "ADD":
      newTodo = {
        id: Date.now(),
        text: action.text,
        done: false,
        deleted: false
      };
      newTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: newTodos,
        allChecked: isAllChecked(newTodos, state.view)
      };

    case "TOGGLE":
      newTodos = [...state.todos];
      newTodo = newTodos.find((todo) => todo.id === action.id);
      console.log("toggleTodo : ", newTodo);
      newTodo.done = !newTodo.done;
      return {
        ...state,
        todos: newTodos,
        allChecked: isAllChecked(newTodos, state.view)
      };

    case "DELETE":
      newTodos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: newTodos,
        allChecked: isAllChecked(newTodos, state.view)
      };

    case "VIEW":
      if (state.view !== action.view) {
        console.log("view changed");
        return {
          ...state,
          view: action.view,
          allChecked: isAllChecked(state.todos, action.view)
        };
      }
      break;

    case "CLEAR-COMPLETED":
      newTodos = state.todos.filter((todo) => !todo.done);
      return {
        ...state,
        todos: newTodos,
        allChecked: isAllChecked(newTodos, state.view)
      };

    case "TOGGLE-ALL":
      const filtered = filteredTodos(state.todos, state.view);
      if (filtered.length === 0) break;

      console.log("state.allChecked : ", state.allChecked);
      newTodos = [...state.todos];
      newTodos.forEach((todo) => (todo.done = !state.allChecked));

      return { ...state, todos: newTodos, allChecked: !state.allChecked };

    default:
      break;
  }

  return state;
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
