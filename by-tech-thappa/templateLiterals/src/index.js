import React from 'react';
import ReactDOM from 'react-dom';


const Fname = "Jagmeet";
const Sname = "Singh";

// console.log(`my name is ${fname}`); uses in javascript

ReactDOM.render(
<>
    <h1>React tutorial : Template  Literals</h1>
    <p>My Name is {Fname} {Sname}</p>
    <p>My Name is {Fname +" "+Sname}</p>
    <p>{`my name is ${Fname} ${Sname}`} &nbsp;&nbsp;&nbsp;/* Using template laterals*/</p> 

</>
,document.getElementById('root'));