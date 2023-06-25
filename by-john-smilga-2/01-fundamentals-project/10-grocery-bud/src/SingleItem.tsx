import React from 'react'

interface IItemObject{
    name:string;
    completed:boolean;
    id:string;
}

interface IItemProps{
    item: IItemObject;
    removeItem: (itemId:string)=>void ;
    editItem: (itemId:string)=>void ;
}

const SingleItem:React.FC<IItemProps> = ({item, removeItem, editItem}) => {
    
  return (
    <div className='single-item'>
        <input type="checkbox" checked={item.completed} onChange={()=> editItem(item.id)}/>
        <p style={{ textTransform:'capitalize' ,textDecoration: item.completed ? 'line-through' : undefined }}>{item.name}</p>
        <button className='btn remove-btn' type='button' onClick={()=> removeItem(item.id)}>Delete</button>
    </div>

  )
}

export default SingleItem