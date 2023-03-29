import React , {useState} from "react";
import './index.css'
// useState ko hee hooks kehte hai aur iski help se kisiki bhi state change kr skte hai

const App = () => 
{
   
    let newTime = new Date().toLocaleTimeString();
    const [timer ,setCtime] = useState(newTime);
    
    const updateTime = () => 
    {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
   
    
    return(
        <>
            <h1>{timer}</h1>
            <button onClick={updateTime} >GET TIME</button>
        </>
    );
}

export default App;