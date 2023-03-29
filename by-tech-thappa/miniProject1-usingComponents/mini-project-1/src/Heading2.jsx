import React from "react";
import './index.css';


function Heading2()
{
    let currDate = new Date(2020,5,20,20);
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

    return <span style={cssStyle}> {greeting} </span>;
}

export default Heading2;