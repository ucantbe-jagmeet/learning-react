import { useState } from "react"
import Form from "./Form"
import { nanoid} from "nanoid"

interface IItemsObject{
  name:string;
  completed:boolean;
  id:string;
}


function App() {
  const [items, setItems] = useState<IItemsObject[]>([])

  const addItem:( itemName: string)=>void = (itemName) =>{
    const newItem:IItemsObject = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }

    setItems([...items, newItem])
  }
  
  return (
    <section className="section-center"> 
        <Form addItem={addItem}/>
    </section>
  )
}

export default App
