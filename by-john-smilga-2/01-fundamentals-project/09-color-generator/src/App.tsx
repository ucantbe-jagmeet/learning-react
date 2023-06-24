import { useState } from "react"
import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"


function App() {

  const [colors, setColors] = useState<any>(new Values('#f15025').all(10))
  const addColor: (color:string)=> void = (color:string)=>{
    try {
        const newColors = new Values(`${color}`).all(10)
        setColors(newColors)
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <main>
        <Form addColor={addColor}/> 
       {
        colors && Array.isArray(colors)?  <ColorList colors={colors}/> : null
       }
    </main>
  )
}

export default App
