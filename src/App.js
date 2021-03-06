import "./App.css";
import "todomvc-app-css/index.css";
import NewTodoContainer from "./containers/NewTodoContainer";
import TodoListContainer from "./containers/TodoListContainer";
import ControlContainer from "./containers/ControlContainer";

function App() {
  return (
    <div className="todoapp">
      <NewTodoContainer />
      <TodoListContainer />
      <ControlContainer />
    </div>
  );
}

export default App;
