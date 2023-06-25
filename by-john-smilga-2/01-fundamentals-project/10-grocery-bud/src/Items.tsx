import React from 'react'
import SingleItem from './SingleItem';

interface IItemsObject{
    name:string;
    completed:boolean;
    id:string;
}

interface IItemsProps{
    items: IItemsObject[];
    removeItem: (itemId:string)=>void ;
    editItem: (itemId:string)=>void ;
}

const Items:React.FC<IItemsProps> = ({items, removeItem , editItem}) => {
  return (
    <div className='items'>
        {
            items.map((item)=>{
                return <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem}/>
            })
        }
    </div>
  )
}

export default Items