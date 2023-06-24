import { useState } from "react"
import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"


function App() {

  const [colors, setColors] = useState<any>(new Values('#f15025').all(10))
  
  return (
    <main>
        <Form/> 
       {
        colors && Array.isArray(colors)?  <ColorList colors={colors}/> : null
       }
    </main>
  )
}

export default App
