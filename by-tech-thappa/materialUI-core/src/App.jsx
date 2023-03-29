import React, {useState} from 'react';
import './index.css'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';




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
        <Tooltip title="Increment">
            <Button className='btn btn1' onClick={increment}><AddIcon/></Button>
        </Tooltip>
        <Tooltip title="Decrement" >
            <Button className='btn btn2' onClick={decrement}><DeleteIcon/></Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App
