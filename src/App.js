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

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

return( 
  <div className='app'>
    <h1 className='header'>STL</h1>
  <div  className='input-clear-container' >
  <TodoInput addTodo={addTodo}></TodoInput>
  <ClearTodos clearTodos={clearTodos}></ClearTodos>
  </div>
  <TodoList items={todos} deleteTodo={deleteTodo}></TodoList>
</div>
);
};

export default App;
