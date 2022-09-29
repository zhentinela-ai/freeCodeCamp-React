import TaskForm from "./TaskForm";
import Task from "./Task";
import "../styles/TasksList.css";
import { useState } from "react";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  const addTaks = (task) => {
    console.log("Tarea agregada");
    console.log(task);
  }

  return (
    <>
      <TaskForm />
      <div className="container-tasks-list">
        {tasks.map((task) => (
          <Task id={task.id} text={task.text} done={task.done}  />
        ))}
      </div>
    </>
  );
}

export default TasksList;
