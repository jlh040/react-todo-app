import React, { useState } from 'react';

const NewTodoForm = () => {
  const initialState = {
    task: 'Where are the goos'
  };
  const [formData, setFormData] = useState(initialState);

};

export default NewTodoForm;