import React from 'react';
import {a,b} from './Variables';

function Sum()
{
    let msg ="Sum of two no. is";
    let ans = a+b;
    return (
        <h1>{msg} {ans}</h1>
    );
}

export default Sum ;