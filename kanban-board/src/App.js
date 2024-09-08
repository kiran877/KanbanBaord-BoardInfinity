import React, { useState } from 'react';
import logo from '../src/images/logo.svg';
import NewTask from './NewTask'; // Updated import
import './App.css';

function App() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  const handleOpenNewTask = () => setIsNewTaskOpen(true);
  const handleCloseNewTask = () => setIsNewTaskOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className="App-logo-top-left" 
          alt="logo"
        />
      </header>

      <div className="New-container">
        <p className="New-container-text">Desktop & Mobile Application</p>
        <button className="New-container-button" onClick={handleOpenNewTask}>Create Task</button>
      </div>

      <NewTask isOpen={isNewTaskOpen} onClose={handleCloseNewTask} />
    </div>
  );
}

export default App;
