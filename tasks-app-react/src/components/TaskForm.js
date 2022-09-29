import { useState } from "react";
import "../styles/TaskForm.css";
import { v4 } from "uuid";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: v4(),
      text: input,
      done: false,
    };
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-task"
        placeholder="Escriba una Tarea"
        name="text"
        onChange={handleChange}
      />
      <button className="task-button">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
