import React from 'react'
import MenuItem from './MenuItem'

interface IMenu{
    id:number,
    title:string,
    category:string,
    price:number,
    img:string,
    desc:string,
}

interface IMenuItems{
    items:IMenu[]
}

const Menu:React.FC< IMenuItems> = ({items}) => {
  return (
    <div className='section-center'>
        {
            items.map((menuItem)=>{
                return <MenuItem key={menuItem.id} {...menuItem}/>
            })
        }
    </div>
  )
}

export default Menu