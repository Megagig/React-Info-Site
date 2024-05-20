import { useState } from 'react';
import './main.css';

const Main = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTask] = useState([
    { id: 1, name: 'Reading a book', completed: false },
    { id: 2, name: 'Playing football', completed: false },
    { id: 3, name: 'Watching a movie', completed: false },
    { id: 4, name: 'Cooking', completed: false },
  ]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTask(newTasks);
  };

  return (
    <>
      <main>
        <h1 className="main-text">Fun facts about React</h1>
        <ul className="main-lists">
          {tasks.map((task) => (
            <li key={task.id}>
              {task.id} {task.name}
              <button className="delete" onClick={() => handleDelete(task.id)}>
                Deleted
              </button>
            </li>
          ))}
        </ul>
      </main>
      <div className="usestate">
        <p className="sub">{count}</p>
        <button className="Addition" onClick={handleAdd}>
          Add
        </button>
        <button className="Subtraction" onClick={handleSub}>
          Sub
        </button>
        <button className="Reset" onClick={handleReset}>
          Reset
        </button>{' '}
      </div>
    </>
  );
};
export default Main;
