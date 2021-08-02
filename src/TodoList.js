import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([{task: 'clean the gutters', id: uuid()}]);

  return (
    <div>
      <h2>Todo List</h2>
      <NewTodoForm />
      {todos.map(todo => <Todo id={todo.id} task={todo.task}/>)}
    </div>
  )
};

export default TodoList;