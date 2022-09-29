import "../styles/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, done, doneTask, deleteTask }) {
  return (
    <div className={done ? "container-task done" : "container-task"}>
      <div className="task-text" onClick={() => doneTask(id)}>
        {text}
      </div>
      <div className="container-task-icon" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
}

export default Task;
