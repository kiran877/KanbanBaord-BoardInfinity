// NewTask.js
import React from 'react';
import './NewTask.css';

const NewTask = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="NewTask-overlay">
      <div className="NewTask-container">
        <div className="NewTask-header">
          <h2>Create New Task</h2>
          <button className="NewTask-close" onClick={onClose}>X</button>
        </div>
        <form className="NewTask-form">
          <label>
            Title:<span className="NewTask-required">*</span>
            <input type="text" placeholder="Enter title" required />
          </label>
          <label>
            Description:
            <textarea placeholder="Enter description" />
          </label>
          <label>
            Select Date:<span className="NewTask-required">*</span>
            <input type="date" required />
          </label>
          <label>
            Status:
            <select>
              <option value="" disabled selected>Select here</option>
              <option value="todo">Todo</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </label>
          <label>
            Priority:
            <select>
              <option value="" disabled selected>Select here</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <div className="NewTask-buttons">
            <button type="button" className="NewTask-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="NewTask-create">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
