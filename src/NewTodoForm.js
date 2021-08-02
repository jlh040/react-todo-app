import React, { useState } from 'react';

const NewTodoForm = () => {
  const initialState = {
    task: 'Where are the goos'
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      [name]: value
    })
  }

  return (
    <div>
      <form>
        <label htmlFor="task">Enter task: </label>
        <input 
          type="text" 
          id="task" 
          placeholder="Enter task here" 
          name="task" 
          value={formData.task}
          onChange={handleChange}
        />
      </form>
    </div>
  )
};

export default NewTodoForm;