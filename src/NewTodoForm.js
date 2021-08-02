import React, { useState } from 'react';

const NewTodoForm = ({ addItem }) => {
  const initialState = {
    task: 'Where are the goos'
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
    <div>
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
        <button>Add Task</button>
      </form>
    </div>
  )
};

export default NewTodoForm;