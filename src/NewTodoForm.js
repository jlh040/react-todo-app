import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = ({ addItem }) => {
  const initialState = {
    task: ''
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      [name]: value
    })
  };
  const handleSubmit = e => {
    e.preventDefault();
    addItem(formData.task);

    setFormData(initialState);
  }

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Enter task: </label>
        <input 
          type="text" 
          id="task" 
          placeholder="Enter task here" 
          name="task" 
          value={formData.task}
          onChange={handleChange}
        />
        <button className="NewTodoForm-btn">Add Task</button>
      </form>
    </div>
  )
};

export default NewTodoForm;