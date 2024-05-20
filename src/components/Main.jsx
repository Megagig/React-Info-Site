import { useState } from 'react';
import './main.css';
const Main = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <main>
        <h1 className="main-text">Fun facts about React</h1>
        <ul className="main-lists">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
      <div className="usestate">
        {/* <p className="Add">{count}</p> */}
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
