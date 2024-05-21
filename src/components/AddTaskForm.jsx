import { useState } from 'react';
import './addTaskForm.css';
const AddTaskForm = () => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <section className="addtask">
      <form>
        <label htmlFor="task">Task Name:</label>
        <input type="text" name="task" id="task" onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};

export default AddTaskForm;
