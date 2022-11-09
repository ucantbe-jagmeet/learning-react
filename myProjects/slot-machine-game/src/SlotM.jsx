import React from "react";


const SlotM = (props) => {
 
    let x = props.x ;
    let y = props.y ;
    let z = props.z ;
    
      if( (x===y) && (x===z) )
      { 
         
        return (
          <>
            <div className="slot_inner" >
              <h1 style = {{fontSize:"30x"}} >{x} {y} {z} </h1>
              <h1> This is Matching</h1>
            </div>
          </>
        );
    
      }
      else
      {
        return (
          <>
            <div className="slot_inner" >
              <h1 style = {{fontSize:"30px"}} >{x} {y} {z} </h1>
              <h1> This is Not Matching</h1>
            </div>
          </>
        );
      }
    }

    export default SlotM;