import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({items})=>{

return(
    <div>
        <ul>
            {items.map((item) => 
            <TodoItem key={item.id} item={item}></TodoItem>
            )}
        </ul>
    </div>  
);

};

export default TodoList;