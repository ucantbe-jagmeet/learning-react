import React from 'react';
import ReactDOM from 'react-dom';
import * as ques from './App';



ReactDOM.render(
<>
    <ol>
        <li>My</li>
        <li>Name is</li>
        <li>{ques.fName()}</li>
        <li>{ques.lName()}</li>
        <li>{ques.default}</li>
        <li>{ques.favprog}</li>
    </ol>

</>    
,document.getElementById('root'));