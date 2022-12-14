import React, {useState} from 'react';
import './index.css'

function App() {

  const [number, setnumber] = useState(10);

  const increment = () => {
    setnumber(number+1)
  }
  const decrement = () => {
    if(number > 0){setnumber(number-1)}
    else{ alert("Number Reaches 0")}
  }  
  

  return(
    <div className='container'>
      <div className='counter' >
        <h1>{number}</h1>
      </div>
      <div className='counter__btn'>
        <button className='btn' onClick={increment}>Increm</button>
        <button className='btn' onClick={decrement}>Decrem</button>
      </div>
    </div>
  );
}

export default App
