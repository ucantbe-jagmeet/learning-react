import React , {useState} from "react";
import './index.css'
// useState ko hee hooks kehte hai aur iski help se kisiki bhi state change kr skte hai

const App = () => 
{
    // const state = useState();
    // console.log(state);

    const [count, setCount] = useState(0);

    const IncNum = () => 
    {
        setCount(count + 1);
    }

    return(
        <>
            <h1>{count}</h1>
            <button onMouseMove={IncNum} >Hover This Button</button>
        </>
    );
}

export default App;