import React , {useState} from "react";
import './index.css'
// useState ko hee hooks kehte hai aur iski help se kisiki bhi state change kr skte hai

const App = () => 
{
   


    const [todaysDate , setCount] = useState(Date());
    
    const Fun = () => 
    {
        // let td = new Date();
        let time = Date.getTime();
        setCount(time);
    }
   
    
    return(
        <>
            <h1>{todaysDate}</h1>
            <button onClick={Fun} >GET TIME</button>
        </>
    );
}

export default App;