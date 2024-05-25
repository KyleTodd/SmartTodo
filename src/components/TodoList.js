import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({items})=>{

return(
    <div>
        <ul>
            {items.map((item, index) => 
            <TodoItem key={index} item={item}></TodoItem>
            )}
        </ul>
    </div>  
);

};

export default TodoList;