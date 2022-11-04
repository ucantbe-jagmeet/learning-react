import React from 'react';
import {a,b} from './Variables';

function Divide()
{
    const msg ="Divide of two no. is";
    let ans = a/b;
    return (
        <h1>{msg} {ans}</h1>
    );
}

export default Divide ;