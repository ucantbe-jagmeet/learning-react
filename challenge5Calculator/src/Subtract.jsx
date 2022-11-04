import React from 'react';
import {a,b} from './Variables';

function Subtract()
{
    let msg ="Subtraction of two no. is";
    let ans = a-b;
    return (
        <h1>{msg} {ans}</h1>
    );
}

export default Subtract ;