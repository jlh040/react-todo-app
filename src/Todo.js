import React from 'react';
import './Todo.css'

const Todo = ({ removeItem, id, task }) => {
  return (
    <div className="Todo">
      <p className="Todo-paragraph">
        Task: {task}
        <button className="Todo-button" onClick={() => removeItem(id)}>X</button>
      </p>
    </div>
  )
};

export default Todo;