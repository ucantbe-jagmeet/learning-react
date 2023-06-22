import { useState } from "react"
import Title from "./Title"
import menu from './data'
import Menu from "./menu"
import Categories from "./Categories"

interface IMenu{
  id:number,
  title:string,
  category:string,
  price:number,
  img:string,
  desc:string,
}

const tempCategories = menu.map((item)=> item.category)
const tempSet = new Set(tempCategories)
const tempItems = ['all', ...tempSet]

function App() {

  const [menuItems, setMenuItems] = useState<IMenu[]>(menu)
  const [ categories , setCategories] = useState<string[]>(tempItems)
  
  const filterItems:(category:string)=>void = (category) =>{
    if(category==='all'){
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
     <section className="menu">
        <Title text='our menu'/>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
     </section>
    </main>
  )
}

export default App
