import React from 'react';
import {a,b}from './Variables';

function Product()
{
    const msg ="Product of two no. is";
    let ans = a*b;
    return (
        <h1>{msg} {ans}</h1>
    );
}

export default Product ;