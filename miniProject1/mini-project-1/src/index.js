import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date();
currDate = currDate.getHours();
let greeting ='';

const cssStyle={};

  if(currDate >=1  && currDate<12)
  {
    greeting =' Good Morning';
    cssStyle.color = 'green';
  }

  else if (currDate >=12  && currDate<19)
  {
    greeting =' Good AfterNoon';
    cssStyle.color = 'orange';
  }
  
  else
  { 
    greeting =' Good Night';
    cssStyle.color = 'black';
  }


ReactDOM.render(
<>
  <div className='container' >
    <h1 >Hello Sir,<span style={cssStyle}> {greeting} </span></h1>
  </div>
</>
,document.getElementById('root'));