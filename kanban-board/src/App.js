import React from 'react';
import logo from '../src/images/logo.svg';  
import './App.css';

function App() {
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
    
        <button className="New-container-button">Create Task</button>
      </div>
    </div>
  );
}

export default App;
