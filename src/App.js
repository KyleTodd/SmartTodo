import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import ClearTodos from './components/ClearTodos';
import './App.css';
import Cookies from 'js-cookie';

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const savedTodos = Cookies.get('todos');
    if (savedTodos){
      setTodos(JSON.parse(savedTodos));
    }
  },[]);

  useEffect(()=>{
    Cookies.set('todos',JSON.stringify(todos),{expires:100});
  },[todos]);

  const addTodo = (todo,category) => {
      const id = Date.now();
      setTodos([...todos, {id,todo,category}]);
  };

  const clearTodos = () => {
    setTodos([]);
  };

return( 
  <div className='app'>
    <h1 className='header'>Smart Todo List</h1>
  <div  className='input-clear-container' >
  <TodoInput addTodo={addTodo}></TodoInput>
  <ClearTodos clearTodos={clearTodos}></ClearTodos>
  </div>
  <TodoList items={todos}></TodoList>
</div>
);
};

export default App;
