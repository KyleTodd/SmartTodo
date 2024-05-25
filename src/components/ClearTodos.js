import React from "react";

const ClearTodos = ({clearTodos}) =>{

    const handleClick = () =>{
        clearTodos();
    };


    return (
        <div>
            <button onClick={handleClick}>Clear List</button>
        </div>
    );

};

export default ClearTodos;