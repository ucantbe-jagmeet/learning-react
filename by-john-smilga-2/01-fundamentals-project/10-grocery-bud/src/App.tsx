import { useState } from "react"
import Form from "./Form"
import { nanoid} from "nanoid"
import Items from "./Items";

interface IItemsObject{
  name:string;
  completed:boolean;
  id:string;
}

const getLocalStorage: () => IItemsObject[] = () => {
  const list: string | null = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
};

const setLocalStorage:( items:IItemsObject[])=> void = (items) =>{
  localStorage.setItem('list', JSON.stringify(items))
}

function App() {
  const [items, setItems] = useState<IItemsObject[]>(getLocalStorage())

  const addItem:( itemName: string)=>void = (itemName) =>{
    const newItem:IItemsObject = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [ ...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const removeItem:(itemId:string)=>void = (itemId:string) =>{ 
    const newItems = items.filter((item)=> item.id !== itemId)
    setItems( newItems)
    setLocalStorage(newItems)
  }
  
  const editItem:(itemId:string)=>void = (itemId:string) =>{ 
    const newItems = items.map((item)=> {
      if( item.id === itemId){
        const newItem= { ...item, completed: !item.completed};
        return newItem
      }
      return item
    })
    setItems( newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center"> 
        <Form addItem={addItem}/>
        <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
  )
}

export default App
