import React from 'react';
import Test2 from '../Test2/Test2';
import "./Test.css";
const Test = (props) => {
    const { name } = props;
    return (
        <div>
            <h2>Hello h2</h2>
            <Test2 name={name} />
        </div>
    );
};

export default Test;