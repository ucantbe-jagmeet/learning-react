//writing code without using jsx expression

import React from 'react';
import ReactDOM from 'react-dom';

const fname = "jagmeet";
const lname = "Singh";

ReactDOM.render(
<>
    <h1>React Js is Boon</h1>
    <p>{fname} {lname}</p>
    <p>my lucky number is {Math.random()}</p>
</>
,document.getElementById('root'));

// only expression can be used in curly braces 
// no statement can be used in curly braces(EX: no if else )