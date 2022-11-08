import React from "react";
import './index.css'


const SlotM = (props) => {
 
let x = props.x ;
let y = props.y ;
let z = props.z

  if( (x===y) && (x===z) )
  { 
     
    return (
      <>
        <div className="slot_inner" >
          <h1>{x} {y} {z} </h1>
          <h1> This is Matching</h1>
          <hr/>
        </div>
      </>
    );

  }
  else
  {
    return (
      <>
        <div className="slot_inner" >
          <h1>{x} {y} {z} </h1>
          <h1> This is Not Matching</h1>
          <hr/>
        </div>
      </>
    );
  }
}

const App = () =>{

  return (
    <>
      <h1 className="heading_style" >Welcome To <span style = {{fontWeight :"lighter"}}> Slot Machine Game </span></h1>
      <div className="slotMachine" >
        <SlotM x='A' y='A' z='A'/>
        <SlotM x='A' y='A' z='B'/>
        <SlotM x='A' y='C' z='A'/>
      </div>
    </>
  );
}

export default App;
