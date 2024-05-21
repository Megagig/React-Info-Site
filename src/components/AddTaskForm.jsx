import { useState } from 'react';
import './addTaskForm.css';
const AddTaskForm = () => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleReset = () => {
    setTask('');
  };

  return (
    <section className="addtask">
      <form>
        <label htmlFor="task">Task Name:</label>
        <input
          type="text"
          name="task"
          id="task"
          onChange={handleChange}
          value={task}
          maxLength={10}
          minLength={5}
        />
        <button type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
      </form>
      <p>{task}</p>
    </section>
  );
};

export default AddTaskForm;
