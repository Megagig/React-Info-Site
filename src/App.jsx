import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import ShowProfile from './components/ShowProfile';

function App() {
  return (
    <div className="container">
      <Navbar />
      <ShowProfile />
      <Main />
    </div>
  );
}

export default App;
