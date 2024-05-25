import React from "react";

const ClearTodos = ({clearTodos}) =>{

    const handleClick = () =>{
        clearTodos();
    };


    return (
        <div>
            <button className='clearitems' onClick={handleClick}>Clear</button>
        </div>
    );

};

export default ClearTodos;