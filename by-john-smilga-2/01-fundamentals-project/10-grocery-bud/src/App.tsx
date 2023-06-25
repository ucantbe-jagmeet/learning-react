import { useState } from "react"
import Form from "./Form"
import { nanoid} from "nanoid"
import Items from "./Items";

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
  
  const removeItem:(itemId:string)=>void = (itemId:string) =>{ 
    const newItems = items.filter((item)=> item.id !== itemId)
    setItems( newItems)
  }

  return (
    <section className="section-center"> 
        <Form addItem={addItem}/>
        <Items items={items} removeItem={removeItem}/>
    </section>
  )
}

export default App
