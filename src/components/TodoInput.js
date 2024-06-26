import React, {useState} from "react";

const TodoInput=({addTodo})=>{
    const [inputValue, setInputValue] = useState('');


    function handleSubmit (e){
        e.preventDefault();
        if (inputValue.trim()){
            addTodo(inputValue,'Urgent');
            setInputValue('');
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input className='todoinput' placeholder="Add an Item" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <button className='additem' type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default TodoInput;