import React , {useState} from "react";
import './index.css'
// useState ko hee hooks kehte hai aur iski help se kisiki bhi state change kr skte hai

const App = () => 
{
   
    let newTime = new Date().toLocaleTimeString();
    const [timer ,setCtime] = useState(newTime);
    
    setInterval(() => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }, 1000);
   
    
    return(
        <>
            <h1>{timer}</h1>
    
        </>
    );
}

export default App;