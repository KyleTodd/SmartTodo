import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const TodoItem = ({item})=>{

    const[completed, setCompleted] = useState(false);

    useEffect(()=>{
        const savedCompleted = Cookies.get(`completed-${item.id}`);
        if (savedCompleted){
          setCompleted(JSON.parse(savedCompleted));
        }
      },[item.id]);
    
      useEffect(()=>{
        Cookies.set(`completed-${item.id}`,JSON.stringify(completed),{expires:100});
    },[completed, item.id]);

    const handleClick = () =>{
        setCompleted(!completed);
    };

    return(
        <>
        <li className={`todo-item ${completed ? 'strikethrough' : ''}`}><input className='checkbox' type='checkbox' onClick={handleClick} ></input>{item.todo} - <span>{item.category}</span></li>
        </>
    );
};

export default TodoItem;