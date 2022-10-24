import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Jagmeet";
const lname = "Singh";
var d = new Date();

ReactDOM.render(
<>
    <h1>{`My name is ${fname} ${lname}`}</h1>
    <p>{`Current date is  ${d.getFullYear()}/${d.getMonth()}/${d.getDay()}`}</p>
    <p>{`Current Time is  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</p>
</>
,document.getElementById('root'));
