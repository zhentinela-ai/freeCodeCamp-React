import TaskForm from "./TaskForm";
import Task from "./Task";
import "../styles/TasksList.css";
import { useState } from "react";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  const addTaks = (task) => {
    task.text = task.text.trim();

    if (task.text) setTasks([task, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    const completedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(completedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTaks} />
      <div className="container-tasks-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            deleteTask={deleteTask}
            doneTask={doneTask}
          />
        ))}
      </div>
    </>
  );
}

export default TasksList;
