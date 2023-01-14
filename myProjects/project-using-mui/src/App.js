import React from 'react';
import {AiOutlineDown} from 'react-icons/ai';


function App() {
  return (
    <div className="container">
      <div className="main__div">
          <h1>React Interview Questions</h1>
          <div className="box">
            <AiOutlineDown className='icon'/>
            <h3>Question</h3>
            <p>Answer</p>
          </div>
      </div>
    </div>
  );
}

export default App;
