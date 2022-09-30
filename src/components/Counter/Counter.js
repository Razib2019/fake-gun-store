import React from 'react';
import "./Counter.css";

const Counter = ({ count, handleAdd, handleMinus }) => {

    return (
        <div className='name'>
            <h1>Count: {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>Minus</button>
        </div>
    );
};

export default Counter;