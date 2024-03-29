import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addItem = task => {
    setTodos(currTodos => {
      return [...currTodos, {task, id: uuid()}]
    })
  };
  const removeItem = (id) => {
    setTodos(currTodos => {
      return currTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <div>
      <h2>Todo List</h2>
      <NewTodoForm addItem={addItem}/>
      {todos.map(todo => <Todo key={todo.id} id={todo.id} task={todo.task} removeItem={removeItem}/>)}
    </div>
  )
};

export default TodoList;