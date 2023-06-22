import { useState } from "react"
import Title from "./Title"
import menu from './data'
import Menu from "./menu"

interface IMenu{
  id:number,
  title:string,
  category:string,
  price:number,
  img:string,
  desc:string,
}


function App() {

  const [menuItems, setMenuItems] = useState<IMenu[]>(menu)

  return (
    <main>
     <section className="menu">
        <Title text='our menu'/>
        <Menu items={menuItems}/>
     </section>
    </main>
  )
}

export default App
