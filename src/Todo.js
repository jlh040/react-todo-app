import React, { useState } from 'react';

const Todo = ({ task }) => {
  return (
    <div>
      <ul>
        <li>Task: {task}</li>
      </ul>
    </div>
  )
};

export default Todo;