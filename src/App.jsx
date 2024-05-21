import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import ShowProfile from './components/ShowProfile';
import AddTaskForm from './components/AddTaskForm';

function App() {
  return (
    <div className="container">
      <Navbar />
      <AddTaskForm />
      <ShowProfile />
      <Main />
    </div>
  );
}

export default App;
