import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import ClearTodos from './components/ClearTodos';

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
      setTodos([...todos, todo]);
  };

  const clearTodos = () => {
    setTodos([]);
  };

return( 
  <div>
    <h1>Todo List</h1>
  <TodoInput addTodo={addTodo}></TodoInput>
  <ClearTodos clearTodos={clearTodos}></ClearTodos>
  <TodoList items={todos}></TodoList>
</div>
);
};

export default App;
