import logo from "./images/logo.png";
import "./App.css";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="task-app">
      <div className="container-logo-freecodecamp">
        <img src={logo} alt="logo" className="freecodecamp-logo" />
      </div>
      <div className="main-tasks-list">
      <h1>Mis Tareas</h1>
      <TasksList />
      </div>
    </div>
  );
}

export default App;
