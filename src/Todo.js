import React from 'react';

const Todo = ({ removeItem, id, task }) => {
  return (
    <div>
      <ul>
        <li>Task: {task}</li>
      </ul>
      <button onClick={() => removeItem(id)}>X</button>
    </div>
  )
};

export default Todo;