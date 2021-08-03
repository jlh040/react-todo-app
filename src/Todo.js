import React from 'react';

const Todo = ({ task }) => {
  return (
    <div>
      <ul>
        <li>Task: {task}</li>
      </ul>
      <button>X</button>
    </div>
  )
};

export default Todo;