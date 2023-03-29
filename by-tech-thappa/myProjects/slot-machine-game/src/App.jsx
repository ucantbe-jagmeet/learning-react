import React from "react";
import './index.css'
import SlotM from "./SlotM";


const App = () =>{

  return (
    <>
      <h1 className="heading_style" >Welcome To <span className="heading_span" >Slot Machine Game </span></h1>
      <div className="slotMachine" >
        <SlotM x='🍎' y='🍎' z='🍎'/>
        <SlotM x='❤️' y='👽' z='❤️'/>
        <SlotM x='😄' y='😄' z='😢'/>
        <SlotM x='⏯️' y='⏯️' z='⏯️'/>
        
      </div>
    </>
  );
}

export default App;
