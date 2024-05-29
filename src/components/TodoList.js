import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({items, deleteTodo})=>{

return(
    <div>
        <ul>
            {items.map((item) => 
            <TodoItem key={item.id} item={item} deleteTodo={deleteTodo}></TodoItem>
            )}
        </ul>
    </div>  
);

};

export default TodoList;